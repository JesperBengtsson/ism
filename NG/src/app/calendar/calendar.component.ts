import { Component, OnInit, NgModule, enableProdMode } from '@angular/core';
import { Service, Room } from './calendar.service';

import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [Service]
})
export class CalendarComponent implements OnInit {

    ngOnInit() {
        
    }

    /*conferenceRoom = [
        { text : "Blue", conferenceRoomID : 1 },
        { text : "Red", conferenceRoomID : 2 }
    
    ];*/


    dataSource: any;
    currentDate = new Date(Date.parse(Date()));
    resourcesDataSource: Room[];

    constructor(service: Service) {
        this.dataSource = new DataSource({
            store: service.getData()
        });

        this.resourcesDataSource = service.getRooms();
    }

    markWeekEnd(cellData) {
        function isWeekEnd(date) {
            var day = date.getDay();
            return day === 0 || day === 6;
        }
        var classObject = {};
        classObject["room-" + cellData.groups.roomID] = true;
        classObject['room-weekend-' + cellData.groups.roomID] = isWeekEnd(cellData.startDate)
        
        return classObject;
    }

    markTraining(cellData) {
        var classObject = {
            "day-cell": true
        }
        classObject[cellData.startDate.getDate(), cellData.groups.roomID] = true;
        
        return classObject;
    }

}

