import { Component, OnInit } from '@angular/core';
import { animate, transition, trigger, style, state } from '@angular/animations';

@Component({
    selector: 'app-conference-room',
    templateUrl: './conference-room.component.html',
    styleUrls: ['./conference-room.component.css'],
    animations: [
        trigger('toggleSchedule', [
            state('open', style({ position: 'fixed', opacity: '1' })),
            state('close', style({ opacity: '0' })),
            transition('open <=> close', animate('500ms'))
        ]),
    ]
})
export class ConferenceRoomComponent implements OnInit {

    openClose: string = 'close';
    public currentDate: Date = new Date();

    constructor() {
        setInterval(() => {
            this.currentDate = new Date();
          }, 1000);
    }

    
    ngOnInit() {

    }

    showSchedule($event) {
        this.openClose = (this.openClose === 'open') ? 'close' : 'open';
    }

}
