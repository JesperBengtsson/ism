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
    public httpBase = 'http://localhost:8080/';
    isDataAvailable: boolean = false;
    introductionState = 'in';

    constructor(private _dataService: DataService) { }

    ngOnInit() {
        this._dataService.getAllSlides()
            .subscribe(data => {
                this.isDataAvailable = true;
                this.slides = data;
                JSON.stringify(data);
            });

        this._dataService.getAllBundles()
            .subscribe(data => {
                this.isDataAvailable = true;
                this.bundles = data;
                JSON.stringify(data);
                console.log(data);
                
            });


        $(document).ready(function () {
            $('#carousel-home').carousel();
        });
    }

    introductionInOut($event) {
        this.introductionState = (this.introductionState === 'in') ? 'out' : 'in';
        $(document).ready(function () {
            $('#carousel-home').carousel();
        });
    }

    myBundles() {
        return this._dataService.getCachedBundles()[0];
    }

    mySlides() {
        return this._dataService.slides4bundles(this.myBundles());
    }



}