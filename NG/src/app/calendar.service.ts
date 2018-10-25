import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CalendarService {

    constructor(private _http: HttpClient) { }

    // | GET CALENDAR EVENTS |
    getBlueConference<T>(): Observable<T> {
        let API_KEY = 'AIzaSyA2vzWK-mUU-YDrQsoRV2w9hUWaAtYXOEc',
            CALENDAR_ID = 'g64n4pes2ku0jq49pj20a1r02g@group.calendar.google.com';
        let dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/',
            CALENDAR_ID, '/events?key=', API_KEY].join('');
        return this._http.get<T>(dataUrl);
    }
    getRedConference<T>(): Observable<T> {
        let API_KEY = 'AIzaSyA2vzWK-mUU-YDrQsoRV2w9hUWaAtYXOEc',
            CALENDAR_ID = '2m7c12tsccebmgp7feshmo872c@group.calendar.google.com';
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

    testGet<T>(): Observable<T> {
        return this._http.get<T>('https://www.googleapis.com/auth/calendar/v3/users/me/calendarList?maxResults=3&key=AIzaSyA2vzWK-mUU-YDrQsoRV2w9hUWaAtYXOEc')
    }
}
