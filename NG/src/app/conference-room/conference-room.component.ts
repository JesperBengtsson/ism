import { Component, OnInit } from '@angular/core';
import { animate, transition, trigger, style, state } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { CalendarService } from '../calendar.service';

declare var $: any;

@Component({
    selector: 'app-conference-room',
    templateUrl: './conference-room.component.html',
    styleUrls: ['./conference-room.component.css'],
    animations: [
        trigger('toggleSchedule', [
            state('open', style({ position: 'fixed', opacity: '1' })),
            state('close', style({position: 'relative' })),
            transition('open <=> close', animate('500ms'))
        ]),
    ]
})
export class ConferenceRoomComponent implements OnInit {

    openClose: string = 'close';
    public currentDate: Date = new Date();

    constructor( private _route: ActivatedRoute, private _calendarService: CalendarService) {
        setInterval(() => {
            this.currentDate = new Date();
          }, 1000);
    }
    
    ngOnInit() {
    }

    background() {
        if(this.getId() === 0){
            return 'linear-gradient(to bottom right, #1A2980, #26D0CE)';
        }
        if(this.getId() === 1){
            return 'linear-gradient(to right bottom, #ca1818, #29261f)';
        }
        if(this.getId() === 2){
            return 'linear-gradient(to bottom right, #5C258D, #4389A2)';
        }
        if(this.getId() === 3){
            return 'linear-gradient(to bottom right, #2c8a43, #4389A2)';
        }
    }

    showSchedule($event) {   
        $('iframe').attr('src', $('iframe').attr('src'));
        setTimeout(() => {
            this.openClose = 'open';
        }, 500)    
    }

    hideSchedule($event) {
        this.openClose = 'close';
    }

    getId() {
        return parseInt(this._route.snapshot.paramMap.get('id'), 10);
    }

    getCurrentConferenceRoom() {
        return this._calendarService.conferenceRooms[this.getId()]
    }

    checkOngoingMeeting() {
        if(this.getOngoingMeeting() == null) {
            return false
        }
        return true
    }

    getOngoingMeeting() {
        var currentDate = new Date();

        if(this.getCurrentConferenceRoom()) {
            for(var i = 0; i < this.getCurrentConferenceRoom().items.length; i++) {
                if(new Date(this.getCurrentConferenceRoom().items[i].start.dateTime).getTime() <= currentDate.getTime()
                && new Date(this.getCurrentConferenceRoom().items[i].end.dateTime).getTime() >= currentDate.getTime()) {
                    return this.getCurrentConferenceRoom().items[i]
                }
            }
        }
    }

}
