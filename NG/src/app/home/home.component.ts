import { Component, OnInit } from '@angular/core';
import { animate, transition, trigger, style, state, stagger, query, keyframes } from '@angular/animations';

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

  constructor() { }

  introductionState = 'in';

  ngOnInit() {
  }

  introductionInOut($event){
    this.introductionState = (this.introductionState === 'in') ? 'out' : 'in';
    console.log(this.introductionState);
  }

}
