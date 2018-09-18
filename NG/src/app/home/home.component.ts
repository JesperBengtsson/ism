import { Component, OnInit } from '@angular/core';
import { animate, transition, trigger, style, state } from '@angular/animations';
import { ISlide } from '../islide';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { IBundle } from '../ibundle';

declare var $ :any;

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
  public filteredSlides: ISlide[];
  public jsonTest = '';
  public httpBase = 'http://localhost:8080/';

  constructor(private _dataService: DataService,
    private _route: ActivatedRoute) { }

  introductionState = 'in';

  ngOnInit() {
    this._dataService.getAllSlides()
    .subscribe( data => {
      this.slides = data;
      this.jsonTest = JSON.stringify(data);
    });


    $(document).ready(function(){
      $('#carousel-home').carousel();
      });
  }

  introductionInOut($event){
    this.introductionState = (this.introductionState === 'in') ? 'out' : 'in';
    $(document).ready(function(){
      $('#carousel-home').carousel();
      });
  }

}