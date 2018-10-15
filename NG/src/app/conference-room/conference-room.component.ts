import { Component, OnInit } from '@angular/core';
import { animate, transition, trigger, style, state } from '@angular/animations';

@Component({
  selector: 'app-conference-room',
  templateUrl: './conference-room.component.html',
  styleUrls: ['./conference-room.component.css'],
  animations: [
    trigger('toggleSchedule', [
      state('open', style({ position: 'fixed', opacity: '1'})),
      state('close', style({ opacity: '0'})),
      transition('close <=> open', animate('400ms'))
  ]),
  ]
})
export class ConferenceRoomComponent implements OnInit {

  public currentDate: Date = new Date();
  openClose: string = 'close';

  constructor() {
    setInterval(() => {
      this.currentDate = new Date();
    }, (60000));
   }

  ngOnInit() {
  }

  showSchedule($event) {
    this.openClose = (this.openClose === 'open') ? 'close' : 'open';
}

}
