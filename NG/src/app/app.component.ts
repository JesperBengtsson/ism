import { Component, AfterViewInit } from '@angular/core';
import { animate, transition, trigger, style, query, group, state, stagger, keyframes } from '@angular/animations';

import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ 
    trigger('routerTransition', [
      transition('* <=> *', [
        /* order */
        /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%', height: '100vh' })
          , { optional: true }),
        /* 2 */ group([  // block executes in parallel
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('300ms', style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('300ms', style({ transform: 'translateX(100%)' }))
          ], { optional: true }),
        ])
      ])
    ]),
    trigger('toggleMenu', [
      state('open', style({ width: '*' })),
      state('close', style({ width: '0px' })),
      transition('close <=> open', animate('200ms'))
    ]),
    
    trigger('move', [
      transition('in => out', [
        query('.carousel', stagger('300ms', [
          animate('20s', keyframes([
            style({  transform: 'translateY(25rem)', offset: 0 }),
            style({  transform: 'translateY(-100%)', offset: 1 }),
          ]))]), { optional: true })
      ])
    ])
  ]
})

export class AppComponent implements AfterViewInit {

  openClose:string = 'close';
  state = 'in';
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'out';
    }, 0);
  }
  onEnd(event) {
    this.state = 'in';
    if (event.toState === 'in') {
      setTimeout(() => {
        this.state = 'out';
      }, 0);
    }
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  
  hideAndShow($event){
    this.openClose = (this.openClose === 'open') ? 'close' : 'open';
  }

}