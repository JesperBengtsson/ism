import { Component, OnInit, HostBinding } from '@angular/core';
import { animate, transition, trigger, style, query, group, state } from '@angular/animations';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'isMobile'; 
  openClose:string = 'open';

  ngOnInit() {

  }
  
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  
  hideAndShow($event){
    this.openClose = (this.openClose === 'open') ? 'close' : 'open';
    console.log(this.openClose);
  }

}