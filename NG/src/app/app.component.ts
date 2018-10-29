import { Component, AfterViewInit, OnInit } from '@angular/core';
import { animate, transition, trigger, style, query, group, state, stagger, keyframes } from '@angular/animations';
import { DataService } from './data.service';
import { CalendarService } from './calendar.service';
import { IAppointment } from './iappointment';

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

    constructor(private _dataService: DataService, private _calendarService: CalendarService) { }

    ngOnInit() {
        this._dataService.cacheData();

    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.state = 'out';
        }, 0);
    }

    //pushes all appointments to array and filters from now > end of day
    allAppointmentsTodayInitAndFilter() {
        this._calendarService.allAppointments = []
        var currentDate = new Date();

        for (var i = 0; i < this._calendarService.conferenceRooms.length; i++) {
            for (var j = 0; j < this._calendarService.conferenceRooms[i].items.length; j++) {
                this._calendarService.allAppointments.push(this._calendarService.conferenceRooms[i].items[j])
            }
        }
        return this._calendarService.allAppointments.filter(data => 
            new Date(data.start.dateTime).getDay() === currentDate.getDay()
            && (new Date(data.start.dateTime).getTime() + 1800000) >= currentDate.getTime())
            .sort((a, b) => new Date(a.start.dateTime).getTime() - new Date(b.start.dateTime).getTime())
    }

    //loops todays meeting animation
    onEnd(e) {
        this.state = 'in';
        if (e.toState === 'in') {
            setTimeout(() => {
                this.state = 'out';
                this._calendarService.getTodaysCalenderData();
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
        if (this.nextClientAppointment().length >= 1) {
            return true;
        } else
            return false;
    }

}