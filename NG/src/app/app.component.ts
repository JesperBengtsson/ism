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
                        style({ transform: 'translateY(21rem)', offset: 0 }),
                        style({ transform: 'translateY(-100%)', offset: 1 }),
                    ]))]), { optional: true })
            ])
        ])
    ]
})

export class AppComponent implements OnInit, AfterViewInit {

    openClose: string = 'close';
    state = 'in';
    dataIsAvaiable: boolean = false;
   // appointments: IAppointment[];

    constructor(private _dataService: DataService, private _calendarService: CalendarService) { }

    ngOnInit() {
        this._dataService.cacheData();
        this.checkInClientArray()

        setTimeout(() => {
            this.checkIfLogoReady()
        }, 1000)

    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.state = 'out';
        }, 0);
    }


    //loops todays meeting animation
    onEnd(e) {
        this.state = 'in';
        if (e.toState === 'in') {
            this.state = 'out';
            this._calendarService.getTodaysCalenderData();
            this.checkInClientArray()
            setTimeout(() => {
                this.checkIfLogoReady()
            }, 1000);
        }
    }

    getState(outlet) {
        return outlet.activatedRouteData.state;
    }

    hideAndShow($event) {
        this.openClose = (this.openClose === 'open') ? 'close' : 'open';
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


    //checks every event rn
    returnNextClientMeeting() {
        var currentDate = new Date();

        for(var i = 0; i < this.allAppointmentsTodayInitAndFilter().length; i++) {
            if(this.allAppointmentsTodayInitAndFilter()[i].description !== undefined) {
                if(this.allAppointmentsTodayInitAndFilter()[i].description.includes('#')) {
                    if((new Date(this.allAppointmentsTodayInitAndFilter()[i].start.dateTime).getTime() - 1800000) <= currentDate.getTime()) {
                        return this.allAppointmentsTodayInitAndFilter()[i].description.split(' ')
                    }
                }
            }
        }
    }

    //looks if a client is entered in description with #client# syntax and prints out logo
    checkInClientArray() {
        if(this.returnNextClientMeeting() !== undefined) {
            for(var i = 0; i < this.returnNextClientMeeting().length; i++) {
                for(var j = 0; j < this._dataService.clientsArray.length; j++) {
                    if(this._dataService.clientsArray[j][0].toLowerCase() === this.returnNextClientMeeting()[i].slice(1, -1).toLowerCase()) {
                        return this._dataService.clientsArray[j][1]
                    }
                }
            }
        }
    }
    
    checkIfLogoReady() {
        if(this.checkInClientArray() !== undefined) {
            this.dataIsAvaiable = true
        }
    }
    
    /*  ---- OLD API ----
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
    }*/

}