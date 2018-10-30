import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CalendarService {

    conferenceRooms: any = [];
    allAppointments: any = [];

    constructor(private _http: HttpClient) { }

    // | GET CALENDAR EVENTS FROM GOOGLE |
    getBlueConference<T>(): Observable<T> {
        let API_KEY = 'AIzaSyA2vzWK-mUU-YDrQsoRV2w9hUWaAtYXOEc',
            CALENDAR_ID = 'n4979evsjdn5cpd9j0cpfjo17k@group.calendar.google.com';
        let dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/',
            CALENDAR_ID, '/events?key=', API_KEY].join('');
        return this._http.get<T>(dataUrl);
    }
    getRedConference<T>(): Observable<T> {
        let API_KEY = 'AIzaSyA2vzWK-mUU-YDrQsoRV2w9hUWaAtYXOEc',
            CALENDAR_ID = 'mmcv60m092lk0sp0do1ubfedvc@group.calendar.google.com';
        let dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/',
            CALENDAR_ID, '/events?key=', API_KEY].join('');
        return this._http.get<T>(dataUrl);
    }
    getRelaxConference<T>(): Observable<T> {
        let API_KEY = 'AIzaSyA2vzWK-mUU-YDrQsoRV2w9hUWaAtYXOEc',
            CALENDAR_ID = 'ajrl9gs8vcpusd252sf5l6bag0@group.calendar.google.com';
        let dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/',
            CALENDAR_ID, '/events?key=', API_KEY].join('');
        return this._http.get<T>(dataUrl);
    }
    getCreativeRoom<T>(): Observable<T> {
        let API_KEY = 'AIzaSyA2vzWK-mUU-YDrQsoRV2w9hUWaAtYXOEc',
            CALENDAR_ID = 'dodktsk63hc8472jp19bcte2v0@group.calendar.google.com';
        let dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/',
            CALENDAR_ID, '/events?key=', API_KEY].join('');
        return this._http.get<T>(dataUrl);
    }

    //subscribe all events and push them to array
    getTodaysCalenderData() {
        this.getBlueConference()
        .subscribe(blue => {
            this.getRedConference()
            .subscribe(red => {
                this.getCreativeRoom()
                .subscribe(creative => {
                    this.getRelaxConference()
                    .subscribe(relax => {
                        this.conferenceRooms = []
                        this.conferenceRooms.push(blue, red, creative, relax)
                    })
                })
            })
        })
    }
}
