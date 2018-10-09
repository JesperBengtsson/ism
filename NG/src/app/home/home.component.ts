import { Component, OnInit } from '@angular/core';
import { animate, transition, trigger, style, state } from '@angular/animations';
import { FormsModule } from '@angular/forms';

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


    foods: Food[] = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
      ];

    public slides: ISlide[];
    public bundles: IBundle[];
    public chosenBundle = 0;
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

    allBundles() {
        return this._dataService.getCachedBundles();
    }

    allSlides() {
        
        return this._dataService.getCachedSlides();
    }

    chooseBundle(bundle: any) {
        this.chosenBundle = (bundle.id - 1);
    }

    mySlides() {
        return this._dataService.slides4bundles(this.allBundles()[this.chosenBundle]);
    }

}