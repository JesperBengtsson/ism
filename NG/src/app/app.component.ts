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
    response: any;


    constructor(private _dataService: DataService, private _http: HttpClient) { }

    ngOnInit() {
        this._dataService.cacheCalendarData();
        this._dataService.cacheData();
        
        this._dataService.getAllAppointments()
        .subscribe(data => {
            this.appointments = data;
            JSON.stringify(data);
            console.log('old data: ', data)
        });
        
        this.getCalendarData()
        
    }

    getCalendarData() {
        let API_KEY = 'AIzaSyA2vzWK-mUU-YDrQsoRV2w9hUWaAtYXOEc',
            CALENDAR_ID = 'g64n4pes2ku0jq49pj20a1r02g@group.calendar.google.com';
        let dataUrl = [ 'https://www.googleapis.com/calendar/v3/calendars/',
                CALENDAR_ID, '/events?key=', API_KEY].join('');
            this._http.get(dataUrl)
            .subscribe((response) => {
                this.response = response;
            });
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.state = 'out';
        }, 0);
    }

/*    unWrapAppointments() {
        this._dataService.getAppointmentPerDate().then(value => {
            return value;
        });
    }
*/
    //loops todays meeting animation
    onEnd(e) {
        this.state = 'in';
        if (e.toState === 'in') {
            setTimeout(() => {
                this.state = 'out';
                this._dataService.cacheAppointmentData();
            }, 0);
        }
    }

    getState(outlet) {
        return outlet.activatedRouteData.state;
    }

    hideAndShow($event) {
        this.openClose = (this.openClose === 'open') ? 'close' : 'open';
    }

    //returns next client meeting
    nextClientAppointment() {
        return this._dataService.checkForClientAppointment(this._dataService.getCachedAppointments());
    }
    
    //returns all appointments from now > end of today
    appointmentsToday() {        
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