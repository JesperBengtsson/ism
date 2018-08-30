import { Injectable } from "@angular/core";

export class Appointment {
    text: string;
    roomId: number[];
    startDate: Date;
    endDate: Date;
    recurrenceRule?: string;
    recurrenceException?: string;
}

export class Resource {
    text: string;
    id: number;
    color: string;
}

export class ResourceMenuItem {
    text: string;
    id: number;
    color: string;
    onItemClick: any;
}

let appointments: Appointment[] = [
    {
        text: "Meeting type 1",
        roomId: [1],
        startDate: new Date(2018, 7, 2, 9, 30),
        endDate: new Date(2018, 7, 2, 11),
        recurrenceRule: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
    }, {
        text: "Meeting type 2",
        roomId: [2],
        startDate: new Date(2018, 7, 1, 9, 30),
        endDate: new Date(2018, 7, 1, 11),
        recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10"
    }, {
        text: "Meeting type 3",
        roomId: [3],
        startDate: new Date(2018, 7, 1, 12, 0),
        endDate: new Date(2018, 7, 1, 13, 0),
        recurrenceRule: "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2"
    }, {
        text: "Meeting type 4",
        roomId: [4],
        startDate: new Date(2018, 7, 1, 9, 0),
        endDate: new Date(2018, 7, 1, 9, 15),
        recurrenceRule: "FREQ=DAILY;BYDAY=WE;UNTIL=20170601"
    }, {
        text: "Meeting type 5",
        roomId: [5],
        startDate: new Date(2018, 7, 26, 10, 0),
        endDate: new Date(2018, 7, 26, 11, 0),
        recurrenceRule: "FREQ=YEARLY;BYWEEKNO=23",
        recurrenceException: "20170611T100000"
    }, {
        text: "Meeting type 6",
        roomId: [4],
        startDate: new Date(2018, 7, 26, 12, 0),
        endDate: new Date(2018, 7, 26, 13, 35),
        recurrenceRule: "FREQ=YEARLY;BYWEEKNO=24;BYDAY=TH,FR"
    }, {
        text: "Meeting type 7",
        roomId: [4],
        startDate: new Date(2018, 7, 26, 14, 30),
        endDate: new Date(2018, 7, 26, 15, 45),
        recurrenceRule: "FREQ=MONTHLY;BYMONTHDAY=27;COUNT=1"
    }, {
        text: "Meeting type 8",
        roomId: [5],
        startDate: new Date(2018, 7, 1, 9, 30),
        endDate: new Date(2018, 7, 1, 13),
        recurrenceRule: "FREQ=YEARLY;BYYEARDAY=148"
    },
    {
        text: "new booking",
        roomId: [1],
        startDate: new Date(2018, 7, 1, 14, 30),
        endDate: new Date(2018, 7, 1, 15, 30)
    }
];

let resources: Resource[] = [
    {
        text: "Room Blue",
        id: 1,
        color: "#425fac"
    }, {
        text: "Room Red",
        id: 2,
        color: "#dd2235"
    }, {
        text: "Room 101",
        id: 3,
        color: "#ae7fcc"
    }, {
        text: "Room 404",
        id: 4,
        color: "#ff8817"
    }, {
        text: "Conference Room",
        id: 5,
        color: "#03bb92"
    }
];

@Injectable()
export class Service {
    getAppointments(): Appointment[] {
        return appointments;
    }
    getResources(): Resource[] {
        return resources;
    }
}
