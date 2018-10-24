import { Component, AfterViewInit, OnInit } from '@angular/core';
import { animate, transition, trigger, style, query, group, state, stagger, keyframes } from '@angular/animations';
import { DataService } from './data.service';
import { IAppointment } from './iappointment';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('routerTransition', [
            transition('* <=> *', [
        /* order */
        /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100vh' })
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

        //carousel for todays meetings
        trigger('move', [
            transition('in => out', [
                query('.meetings', stagger('300ms', [
                    animate('20s', keyframes([
                        style({ transform: 'translateY(18rem)', offset: 0 }),
                        style({ transform: 'translateY(-100%)', offset: 1 }),
                    ]))]), { optional: true })
            ])
        ])
    ]
})

export class AppComponent implements OnInit, AfterViewInit {

    openClose: string = 'close';
    state = 'in';
    appointments: IAppointment[];
    testArr: any = [];

    constructor(private _dataService: DataService, private _http: HttpClient) { }

    ngOnInit() {
        this._dataService.cacheCalendarData();
        this._dataService.cacheData();
        
        this._dataService.getAllAppointments()
        .subscribe(data => {
            this.appointments = data;
            JSON.stringify(data);
            console.log('old data: ',typeof data , data)
        });

    }
    
    ngAfterViewInit() {
        setTimeout(() => {
            this.state = 'out';
        }, 0);
    }
    
    getCalendarData() {
        this._dataService.getData()
        .subscribe(data => {
            var currentDate = new Date();
            for(var i = 0; i < data.items.length; i++) {
                if(new Date(data.items[i].start.dateTime).getDay() === currentDate.getDay()
                && (new Date(data.items[i].start.dateTime).getTime() + 1800000) >= currentDate.getTime()){
                    this.testArr.push(data.items[i].start.dateTime)
                }
            }
        })
    }



    //loops todays meeting animation
    onEnd(e) {
        this.state = 'in';
        if (e.toState === 'in') {
            setTimeout(() => {
                this.state = 'out';
                this.getCalendarData();
            }, 0);
        }
    }

    getState(outlet) {
        return outlet.activatedRouteData.state;
    }

    /*testDataFilter(value: any) {
        var currentDate = new Date();
        console.log(value.items)
        var test = Object.keys(value.items)
            .filter( a => new Date(value.items[a].start.dateTime).getDay() === currentDate.getDay())
            for(var i = 0; i < test.length; i++) {
                return i++;
            }
    }*/

    hideAndShow($event) {
        this.openClose = (this.openClose === 'open') ? 'close' : 'open';
    }

    //returns next client meeting
    nextClientAppointment() {
        return this._dataService.checkForClientAppointment(this._dataService.getCachedAppointments());
    }
    
    //returns all appointments from now > end of today
    appointmentsToday() {    
        console.log(this._dataService.appointmentsPerDay(this._dataService.getCachedAppointments()))    
        return this._dataService.appointmentsPerDay(this._dataService.getCachedAppointments());
    }

    //bool for client meeting
    checkForClientAppointment() {
        if(this.nextClientAppointment().length >= 1) {
            return true;
        } else
            return false;
    }

    
        
    
 
}