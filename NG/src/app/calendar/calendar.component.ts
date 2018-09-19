import { Component, OnInit, ViewChild } from '@angular/core';
import { Appointment, Resource, ResourceMenuItem, Service } from './calendar.service';
import { DxContextMenuComponent, DxSchedulerComponent } from 'devextreme-angular';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

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
        // do init at here for current route.
        this.countDown = this.startTimer(1000);
    }

    startTimer(time: number): Subscription {
        return interval(time).subscribe(() => {
            if(this.timer > 0) {
                this.timer--;
            }
            if(this.timer === 0) {
                this.router.navigate(['/home']);
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
    resourcesMenuItems: ResourceMenuItem[];
    groups: any;
    crossScrollingEnabled: boolean = false;

    contextMenuCellData: any;
    contextMenuAppointmentData: any;
    contextMenuTargetedAppointmentData: any;
    
    appointmentContextMenuItems: any;
    cellContextMenuItems: any;

    constructor(service: Service, private router : Router) {
        let that = this;
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
            { text: 'Open', onItemClick: () => this.showAppointment() },
            { text: 'Delete', onItemClick: () => this.deleteAppointment() },
            //{ text: 'Repeat Weekly', beginGroup: true, onItemClick: () => this.repeatAppointmentWeekly() }
            //{ text: 'Set Room', beginGroup: true, disabled: true }
        ];
        //this.appointmentContextMenuItems = [...this.appointmentContextMenuItems, ...this.resourcesMenuItems]

    }

    onValueChanged(e) {
        beginGroup: true;
        this.groupCell();
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

    showAppointment() {
        this.scheduler.instance.showAppointmentPopup(this.contextMenuAppointmentData);
    }
    
    deleteAppointment() {
        this.scheduler.instance.deleteAppointment(this.contextMenuAppointmentData);
    }
    
    /*repeatAppointmentWeekly() {
        let updatedData = Object.assign({}, this.contextMenuAppointmentData, {
          startDate: this.contextMenuTargetedAppointmentData.startDate,
          recurrenceRule: "FREQ=WEEKLY"
        });

        this.scheduler.instance.updateAppointment(this.contextMenuAppointmentData, updatedData);
    }*/

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
    
}

