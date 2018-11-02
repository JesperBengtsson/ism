import { Component, OnInit } from '@angular/core';
import { animate, transition, trigger, style, state } from '@angular/animations';

import { DataService } from '../data.service';
import { ISlide } from '../islide';
import { IBundle } from '../ibundle';

declare var $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('introductionTransition', [
            state('in', style({ width: '50%' })),
            state('out', style({ width: '100%' })),
            transition('in <=> out', animate('200ms'))
        ])
    ]
})
export class HomeComponent implements OnInit {
    
    public slides: ISlide[];
    public bundles: IBundle[];
    public chosenBundle: number = 1;
    public activeSlideIndex: number = 0;
    public httpBase = 'http://localhost:8080/';
    isDataAvailable: boolean = false;
    introductionState = 'in';

    constructor(private _dataService: DataService) { }

    ngOnInit() {
        this._dataService.getAllSlides()
        .subscribe(slideData => {
            this._dataService.getAllBundles()
            .subscribe(bundleData => {
                this.bundles = bundleData;
                this.slides = slideData;
                this.isDataAvailable = true;
            })
        })


        $(document).ready(function () {
            $('#carousel-home').carousel();
            $('#carousel-home').on('slid.bs.carousel', function () {
            // self.isClientAvailable();
            });
        });
   }
    
    //called when carousel slides
    // activeSlideChange(event: any) {
    //     this.isClientAvailable();
    //     console.log('event = null: ',event, 'chosenbundle: ',(this.chosenBundle - 1));
    // }

    //toggles fullscreen <=> animation
    introductionInOut($event) {
        this.introductionState = (this.introductionState === 'in') ? 'out' : 'in';
    }

    allBundles() {
        return this._dataService.getCachedBundles();
    }

    allSlides() {
        return this._dataService.getCachedSlides();
    }

    /*
    nextClientAppointment() {
        return this._dataService.checkForClientAppointment(this._dataService.getCachedAppointments());
    }

    //checks for client meeting toggles fullscreen in and out
    isClientAvailable() {
        if(this.nextClientAppointment().length === 0) {
            if(this.introductionState != 'out') {
                this.introductionState = 'out';
            }
        }
        else {
            this.introductionState = 'in';
        }
    }*/

    //what slides to play
    mySlides() {
        return this._dataService.slides4bundles(this.allBundles()[(this.chosenBundle - 1)]);
    }

}