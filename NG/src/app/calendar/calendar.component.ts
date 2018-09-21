import { Component, OnInit, ViewChild } from '@angular/core';
import { Appointment, Resource, ResourceMenuItem, Clients, Service } from './calendar.service';
import { DxContextMenuComponent, DxSchedulerComponent } from 'devextreme-angular';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import Query from 'devextreme/data/query';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [Service]
})
export class CalendarComponent implements OnInit {

    countDown: Subscription;
    timer = (60 * 3);

    ngOnInit() {
        this.countDown = this.startTimer(1000);
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

    @ViewChild(DxSchedulerComponent) scheduler: DxSchedulerComponent;
    @ViewChild('appointmentMenu') appointmentMenu: DxContextMenuComponent;
    @ViewChild('cellMenu') cellMenu: DxContextMenuComponent;

    appointmentsData: Appointment[];
    currentDate: Date = new Date(Date());
    resourcesData: Resource[];
    clientsData: Clients[];
    resourcesMenuItems: ResourceMenuItem[];
    groups: any;
    crossScrollingEnabled: boolean = false;

    contextMenuCellData: any;
    contextMenuAppointmentData: any;
    contextMenuTargetedAppointmentData: any;
    
    appointmentContextMenuItems: any;
    cellContextMenuItems: any;

    constructor(service: Service, private _route : Router) {
        let that = this;
        this.clientsData = service.getClients();
        this.appointmentsData = service.getAppointments();
        this.resourcesData = service.getResources();
        this.resourcesMenuItems = [];
        this.cellContextMenuItems = [
            { text: 'New Appointment', onItemClick: () => this.createAppointment()},
            { text: 'New Recurring Appointment', onItemClick: () => this.createRecurringAppointment()},
            { text: 'Go to Today', onItemClick: () => this.showCurrentDate()}
        ];

        this.resourcesData.forEach(function (item) {
            let menuItem: ResourceMenuItem = {
                text: item.text,
                id: item.id,
                color: item.color,
                onItemClick: that.setResource.bind(that)
            }

            that.resourcesMenuItems.push(menuItem);
        });

        this.appointmentContextMenuItems = [
            { text: 'Open', onItemClick: () => this.onContextShowAppointment() },
            { text: 'Delete', onItemClick: () => this.onContextDeleteAppointment() },
            //{ text: 'Repeat Weekly', beginGroup: true, onItemClick: () => this.repeatAppointmentWeekly() }
            //{ text: 'Set Room', beginGroup: true, disabled: true }
        ];
        //this.appointmentContextMenuItems = [...this.appointmentContextMenuItems, ...this.resourcesMenuItems]

    }

    getRoomById(id) {
        return Query(this.resourcesData).filter(["id", "=", id]).toArray()[0];
    }
    
    getClientById(id) {
        return Query(this.clientsData).filter(["id", "=", id]).toArray()[0];
    }

    setResource(itemData) {
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
            this.groups = ["roomId"];
            this.crossScrollingEnabled = true;
        };
    }
    
    showCurrentDate() {
        this.currentDate = new Date();
    }
    
    tooltipDeleteAppointment(appointment) {
        this.scheduler.instance.deleteAppointment(appointment);
    }

    tooltipShowAppointment(appointment) {
        this.scheduler.instance.showAppointmentPopup(appointment);
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
    
    onValueChanged(e) {
        beginGroup: true;
        this.groupCell();
    }
    
    onAppointmentFormCreated(e) {
        var form = e.form;

        form.itemOption("startDate", {
                name: "startDate",
                dataField: "startDate",
                editorType: "dxDateBox",
                editorOptions: {
                type: "time",
                pickerType: "list",
                readOnly: true
            }
        })

        form.itemOption("endDate", {
            name: "endDate",
            dataField: "endDate",
            editorType: "dxDateBox",
            editorOptions: {
                type: "time",
                pickerType: "list",
            }
        });
    }
}

