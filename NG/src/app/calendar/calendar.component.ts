import { Component, OnInit, NgModule, enableProdMode } from '@angular/core';
import { Service, Employee } from './calendar.service';

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

    dataSource: any;
    currentDate = new Date(Date.parse(Date()));
    resourcesDataSource: Employee[];

    constructor(service: Service) {
        this.dataSource = new DataSource({
            store: service.getData()
        });

        this.resourcesDataSource = service.getEmployees();
    }

    markWeekEnd(cellData) {
        function isWeekEnd(date) {
            var day = date.getDay();
            return day === 0 || day === 6;
        }
        var classObject = {};
        classObject["employee-" + cellData.groups.employeeID] = true;
        classObject['employee-weekend-' + cellData.groups.employeeID] = isWeekEnd(cellData.startDate)
        
        return classObject;
    }

    markTraining(cellData) {
        var classObject = {
            "day-cell": true
        }
        classObject[cellData.startDate.getDate(), cellData.groups.employeeID] = true;
        
        return classObject;
    }

}

