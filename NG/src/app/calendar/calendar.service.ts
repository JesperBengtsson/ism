import { Injectable } from "@angular/core";

export class Appointment {
    text: string;
    client: string;
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
        client: "Vattenfall",
        roomId: [1],
        startDate: new Date(2018, 8, 2, 9, 30),
        endDate: new Date(2018, 8, 2, 11),
        recurrenceRule: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
    }, {
        text: "Meeting type 2",
        client: "Vattenfall",
        roomId: [2],
        startDate: new Date(2018, 8, 1, 9, 30),
        endDate: new Date(2018, 8, 1, 11),
        recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10"
    }, {
        text: "Meeting type 3",
        client: "Vattenfall",
        roomId: [3],
        startDate: new Date(2018, 8, 1, 12, 0),
        endDate: new Date(2018, 8, 1, 13, 0),
        recurrenceRule: "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2"
    }, {
        text: "Meeting type 4",
        client: "Vattenfall",
        roomId: [4],
        startDate: new Date(2018, 8, 1, 9, 0),
        endDate: new Date(2018, 8, 1, 9, 15),
        recurrenceRule: "FREQ=DAILY;BYDAY=WE;UNTIL=20190601"
    }, {
        text: "Meeting type 5",
        client: "Tullverket",
        roomId: [5],
        startDate: new Date(2018, 8, 26, 10, 0),
        endDate: new Date(2018, 8, 26, 11, 0),
        recurrenceRule: "FREQ=YEARLY;BYWEEKNO=23",
        recurrenceException: "20181011T100000"
    }, {
        text: "Meeting type 6",
        client: "Tullverket",
        roomId: [4],
        startDate: new Date(2018, 8, 26, 12, 0),
        endDate: new Date(2018, 8, 26, 13, 35),
        recurrenceRule: "FREQ=YEARLY;BYWEEKNO=24;BYDAY=TH,FR"
    }, {
        text: "Meeting type 8",
        client: "Tullverket",
        roomId: [4],
        startDate: new Date(2018, 8, 26, 14, 30),
        endDate: new Date(2018, 8, 26, 15, 45),
        recurrenceRule: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
    }, {
        text: "Meeting type 8",
        client: "Tullverket",
        roomId: [5],
        startDate: new Date(2018, 8, 1, 9, 30),
        endDate: new Date(2018, 8, 1, 13),
        recurrenceRule: "FREQ=YEARLY;BYYEARDAY=148"
    },
    {
        text: "new booking",
        client: "Tullverket",
        roomId: [1],
        startDate: new Date(2018, 8, 1, 14, 30),
        endDate: new Date(2018, 8, 1, 15, 30)
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
