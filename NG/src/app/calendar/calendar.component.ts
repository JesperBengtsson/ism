import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DxContextMenuComponent, DxSchedulerComponent } from 'devextreme-angular';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import Query from 'devextreme/data/query';

import DataSource from "devextreme/data/data_source";
import "rxjs/add/operator/toPromise";
import CustomStore from "devextreme/data/custom_store";

import { DataService } from '../data.service';
import { IClient } from '../iclient';
import { IRoom } from '../iroom';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [DataService]
})
export class CalendarComponent implements OnInit {
 
    @ViewChild(DxSchedulerComponent) scheduler: DxSchedulerComponent;
    @ViewChild('appointmentMenu') appointmentMenu: DxContextMenuComponent;
    @ViewChild('cellMenu') cellMenu: DxContextMenuComponent;
    
    countDown: Subscription;
    timer = (60 * 3);
    
    currentDate: Date = new Date(Date());
//    appointmentsData: IAppointment[];
    appointmentsData: any = {};
    roomsData: IRoom[];
    clientsData: IClient[];
    groups: any;
    crossScrollingEnabled: boolean = false;
    
    contextMenuCellData: any;
    contextMenuAppointmentData: any;
    contextMenuTargetedAppointmentData: any;
    appointmentContextMenuItems: any;
    cellContextMenuItems: any;
    
    store: CustomStore;
    constructor(private _dataService: DataService, private _route : Router, @Inject(HttpClient) httpClient: HttpClient) {
        let serviceUrl = "http://localhost:8080/api";

        this.appointmentsData = new DataSource({
            store: new CustomStore({
                loadMode: "raw",
                load: () => {
                    console.log(httpClient.get(serviceUrl + '/allappointments')
                        .toPromise());
                    return httpClient.get(serviceUrl + '/allappointments')
                        .toPromise();
                },
                onInserting: () => {
                    //TODO OVERLAP CHECKER
                },
                insert: (values) => {
                    return httpClient.post(serviceUrl + '/postappointment', values)
                        .toPromise();
                },
                onInserted: (key) => {
                        return this.appointmentsData.reload(key);
                },
                onUpdating: () => {
                    //TODO OVERLAP CHECKER
                },
                update: (key, values) => {
                    if(values.room.id.length === 1){
                        values.room.id = values.room.id[0];
                        values.client.id = values.client.id[0];
                    }
                    return httpClient.put((serviceUrl + '/editappointment/') + key.id, values)
                        .toPromise();
                },
                onUpdated: (key) => {
                    return this.appointmentsData.reload(key);
                },
                /*remove: (key) => {
                    return httpClient.delete((serviceUrl + '/appointment/')+ key.id)
                    .toPromise();
                },*/
                onRemoved: (key) => {
                    return this.appointmentsData.reload(key);
                }
            }),
            paginate: false
        })
     }
    
    ngOnInit() {
        

        this._dataService.getAllClients()
        .subscribe( data => {
            this.clientsData = data;
            JSON.stringify(data);
        });

        this._dataService.getAllRooms()
        .subscribe( data => {
            this.roomsData = data;
            JSON.stringify(data);
        });
        
        
        this.countDown = this.startTimer(1000);

//        this.appointmentsData = this._dataService.getCachedAppointments();
        this.clientsData = this._dataService.getCachedClients();
        this.roomsData = this._dataService.getCachedRooms();
        
        this.cellContextMenuItems = [
            { text: 'New Appointment', onItemClick: () => this.createAppointment()},
            { text: 'New Recurring Appointment', onItemClick: () => this.createRecurringAppointment()},
            { text: 'Go to Today', onItemClick: () => this.showCurrentDate()}
        ];

        this.appointmentContextMenuItems = [
            { text: 'Open', onItemClick: () => this.onContextShowAppointment() },
            { text: 'Delete', onItemClick: () => this.onContextDeleteAppointment() },
        ];
    }
    
    startTimer(time: number): Subscription {
        return interval(time).subscribe(() => {
            if(this.timer > 0) {
                this.timer--;
            }
            if(this.timer === 0) {
                this._route.navigate(['/home']);
                this.countDown.unsubscribe();
            }
        });
    }

    onAppointmentAdded(e) {
        console.log(e);
    }

    getRoomById(id) {
        return Query(this.roomsData).filter(["id", "=", id]).toArray()[0];
    }
    
    getClientById(id) {
        if(id.client != null) {
            return Query(this.clientsData).filter(["id", "=", id.client.id]).toArray()[0];
        }
    }

    setRoom(itemData) {
        let data = Object.assign({}, this.contextMenuAppointmentData, {
            roomId: [itemData.id]
        });
        
        this.scheduler.instance.updateAppointment(this.contextMenuAppointmentData, data); 
    }
    
    createAppointment() {
        this.scheduler.instance.showAppointmentPopup({
            startDate: this.contextMenuCellData.startDate
        }, true);
    }
    
    createRecurringAppointment() {
        this.scheduler.instance.showAppointmentPopup({
            startDate: this.contextMenuCellData.startDate,
            recurrenceRule: "FREQ=DAILY"
        }, true);
    }
    
    groupCell() {
        if(this.groups && this.groups.length) {
            this.crossScrollingEnabled = false;
            this.groups=[];
        } else {
            this.groups = ["room.id"];
            this.crossScrollingEnabled = true;
        };
    }

    onValueChanged() {
        this.groupCell();
    }
    
    showCurrentDate() {
        this.currentDate = new Date();
    }
    
    onTooltipDeleteAppointment(appointment) {
        this.scheduler.instance.deleteAppointment(appointment);
        this.scheduler.instance.hideAppointmentTooltip();
    }

    onTooltipShowAppointment(appointment) {
        this.scheduler.instance.showAppointmentPopup(appointment);
        this.scheduler.instance.hideAppointmentTooltip();
    }

    onContextShowAppointment() {
        this.scheduler.instance.showAppointmentPopup(this.contextMenuAppointmentData);
    }

    onContextDeleteAppointment() {
        this.scheduler.instance.deleteAppointment(this.contextMenuAppointmentData);
    }
    
    onContextMenuItemClick(e) {
        e.itemData.onItemClick(e.itemData);
    }
    
    onAppointmentContextMenu(e) {
        this.contextMenuAppointmentData = e.appointmentData;
        this.contextMenuTargetedAppointmentData = e.targetedAppointmentData;
    }
    
    onCellContextMenu(e) {
        this.contextMenuCellData = e.cellData;
    }  
    
    onAppointmentFormCreated(e) {
        var form = e.form;

        form.itemOption("startDate", {
                name: "startDate",
                dataField: "startDate",
                editorType: "dxDateBox",
                editorOptions: {
                type: "time",
                pickerType: "list"                
            }
        });
        form.itemOption("endDate", {
            name: "endDate",
            dataField: "endDate",
            editorType: "dxDateBox",
            editorOptions: {
                type: "time",
                pickerType: "list",
            }
        });
        form.itemOption("room.id", {
            validationRules: [{
                type: "required"
            }]
        });
        form.itemOption("allDay", "visible", false);
    }
}