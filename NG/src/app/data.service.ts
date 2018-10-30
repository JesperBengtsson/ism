import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { google } from 'googleapis';

import { ISlide } from './islide';
import { IBundle } from './ibundle';

import { IAppointment } from './iappointment';
import { IClient } from './iclient';
import { IRoom } from './iroom';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    baseUrl = '';

    slides: ISlide[] = [];
    bundles: IBundle[] = [];
    test: any;
    values: any[];
    
    appointments: IAppointment[] = [];
    clients: IClient[] = [];
    rooms: IRoom[] = [];

    clientsArray = [
        ['Vattenfall AB', '/src/img/logos/vattenfall_logo1.png'],
        ['Vattenfall', '/src/img/logos/vattenfall_logo1.png'],
        ['Tunstall', '/src/img/logos/tunstall_logo1.png'],
        ['Tullverket', '/src/img/logos/tullverket_logo1.png'],
        ['T-Systems', '/src/img/logos/t-systems_logo1.png'],
        ['TSystems', '/src/img/logos/t-systems_logo1.png'],
        ['Telia', '/src/img/logos/telia_logo1.png'],
        ['Symbol', '/src/img/logos/symbol_logo1.png'],
        ['Sogeti', '/src/img/logos/sogeti_logo1.png'],
        ['sibelga', '/src/img/logos/sibelga_logo1.png'],
        ['Redexis-Gas', '/src/img/logos/redexis_gas_logo1.png'],
        ['RedexisGas', '/src/img/logos/redexis_gas_logo1.png'],
        ['Oracle', '/src/img/logos/oracle_logo1.png'],
        ['Optimus', '/src/img/logos/optimus_logo1.png'],
        ['maintpartner', '/src/img/logos/maintpartner_logo1.png'],
        ['Maint Partner', '/src/img/logos/maintpartner_logo1.png'],
        ['Kamstrup', '/src/img/logos/kamstrup_logo1.png'],
        ['intermec', '/src/img/logos/intermec_logo1.png'],
        ['ibm', '/src/img/logos/ibm_logo1.png'],
        ['Gegenbauer', '/src/img/logos/gegenbauer_logo1.png'],
        ['Gasnatural Fenosa', '/src/img/logos/gasnatural_fenosa_logo1.png'],
        ['Ericsson', '/src/img/logos/ericsson_logo1.png'],
        ['Enexis', '/src/img/logos/enexis_logo1.png'],
        ['Eltel', '/src/img/logos/eltel_logo1.png'],
        ['Digita', '/src/img/logos/digita_logo1.png'],
        ['adc krone', '/src/img/logos/adc_krone_logo1.png']
    ];

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private _http: HttpClient) {
        this.baseUrl = 'http://localhost:8080/api/';
    }

    // Slides [START]
    pushGlobMovie(slides: ISlide[]) {
        this.slides = slides;      
    }

    getCachedSlides(): ISlide[] { return this.slides; }

    getAllSlides(): Observable<ISlide[]> {
        return this._http.get<ISlide[]>('http://localhost:8080/api/allslides');
    }

    postSlide(slide: ISlide) {
        return this._http.post<string>('http://localhost:8080/api/postslide', slide, this.httpOptions);
    }
    // Slides [END]

    // Bundles [START]
    pushGlobBundle(bundles: IBundle[]) {
        this.bundles = bundles;
    }

    getCachedBundles(): IBundle[] { return this.bundles; }

    getAllBundles(): Observable<IBundle[]> {
        return this._http.get<IBundle[]>('http://localhost:8080/api/allbundles');
    }

    postBundle(bundle: IBundle) {
        return this._http.post<string>('http://localhost:8080/api/postbundle', bundle, this.httpOptions);
    }
    // Bundles [END]

    ///// OLD CALENDAR DATA /////

    // Appointments [START]
    /*
    pushGlobAppointment(appointments: IAppointment[]) {
        this.appointments = appointments;
    }

    getCachedAppointments(): IAppointment[] { return this.appointments; }

    getAllAppointments(): Observable<IAppointment[]> {
        return this._http.get<IAppointment[]>('http://localhost:8080/api/allappointments');
    }

    postAppointment(appointment: IAppointment) {
        return this._http.post<string>('http://localhost:8080/api/postappointment', appointment, this.httpOptions);
    }
    // Appointments [END]

    // Clients [START]
    pushGlobClient(clients: IClient[]) {
        this.clients = clients;
    }

    getCachedClients(): IClient[] { return this.clients; }

    getAllClients(): Observable<IClient[]> {
        return this._http.get<IClient[]>('http://localhost:8080/api/allclients');
    }
    // Clients [END]

    // Rooms [START]
    pushGlobRoom(rooms: IRoom[]) {
        this.rooms = rooms;
    }

    getCachedRooms(): IRoom[] { return this.rooms; }

    getAllRooms(): Observable<IRoom[]> {
        return this._http.get<IRoom[]>('http://localhost:8080/api/allrooms');
    }
    // Rooms [END]
    
    cacheCalendarData() {
        this._http.get<IAppointment[]>('http://localhost:8080/api/allappointments').subscribe(appointments => { this.appointments = appointments });
        this._http.get<IClient[]>('http://localhost:8080/api/allclients').subscribe(clients => { this.clients = clients });
        this._http.get<IRoom[]>('http://localhost:8080/api/allrooms').subscribe(rooms => { this.rooms = rooms });
    }

    cacheAppointmentData() {
        this._http.get<IAppointment[]>('http://localhost:8080/api/allappointments').subscribe(appointments => { this.appointments = appointments });
    
    }*/
    
    cacheData() {
        this._http.get<ISlide[]>('http://localhost:8080/api/allslides').subscribe(slides => { this.slides = slides; });
        this._http.get<IBundle[]>('http://localhost:8080/api/allbundles').subscribe(bundles => { this.bundles = bundles; });
    }
    

    //filters slides of said bundle
    slides4bundles(bundle: IBundle) {
        if (this.slides === []) {
            return [];
        }
        return this.slides.filter(s => s.bundle.id === bundle.id);
    }

    //filters out what appointments is from now > end of today
    appointmentsPerDay(appointment: IAppointment[]) {
        var currentDate = new Date();

        return appointment.filter(a => new Date(a.startDate).getDay() === currentDate.getDay()
            && (new Date(a.startDate).getTime() + 1800000) >= currentDate.getTime())
            .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    }

    //filters out client appointments with a 30min margin <=>
    checkForClientAppointment(appointment: IAppointment[]) {
        var currentDate = new Date();
        
        return appointment.filter(a => (new Date(a.startDate).getTime() + 1800000) >= currentDate.getTime()
            && (new Date(a.startDate).getTime() - 1800000) <= currentDate.getTime() && a.client != null)
            .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
    }
}
