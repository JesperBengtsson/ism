import { Injectable } from "@angular/core";

export class Appointment {
    roomId: number;
    clientId?: number;
    text: string;
    startDate: Date;
    endDate: Date;
    recurrenceRule?: string;
    recurrenceException?: string;
}

export class Room {
    text: string;
    id: number;
    color: string;
    image: string;
}

export class Client {
    text: string;
    id: number;
}

let clients: Client[] = [
    {
        text: "Vattenfall",
        id: 1
    },
    {
        text: "Tullverket",
        id: 2
    },
    {
        text: "Eltel",
        id: 3
    },
    {
        text: "IBM",
        id: 4
    } 
];

let appointments: Appointment[] = [
    {
        roomId: 1,
        text: "Meeting type 1",
        startDate: new Date(2018, 8, 2, 9, 30),
        endDate: new Date(2018, 8, 2, 11),
        recurrenceRule: "FREQ=WEEKLY;BYDAY=TU,FR;COUNT=10"
    }, {
        roomId: 2,
        clientId: 1,
        text: "Meeting type 2",
        startDate: new Date(2018, 8, 1, 9, 30),
        endDate: new Date(2018, 8, 1, 11),
        recurrenceRule: "FREQ=WEEKLY;BYDAY=MO,TH;COUNT=10"
    }, {
        roomId: 3,
        clientId: 1,
        text: "Meeting type 3",
        startDate: new Date(2018, 8, 1, 12, 0),
        endDate: new Date(2018, 8, 1, 13, 0),
        recurrenceRule: "FREQ=WEEKLY;BYDAY=MO;WKST=TU;INTERVAL=2;COUNT=2"
    }, {
        roomId: 4,
        clientId: 2,
        text: "Meeting type 4",
        startDate: new Date(2018, 8, 1, 9, 0),
        endDate: new Date(2018, 8, 1, 9, 15),
        recurrenceRule: "FREQ=DAILY;BYDAY=WE;UNTIL=20190601"
    }, {
        roomId: 5,
        clientId: 2,
        text: "Meeting type 5",
        startDate: new Date(2018, 8, 26, 10, 0),
        endDate: new Date(2018, 8, 26, 11, 0),
        recurrenceRule: "FREQ=YEARLY;BYWEEKNO=23",
        recurrenceException: "20181011T100000"
    }, {
        roomId: 4,
        clientId: 3,
        text: "Meeting type 6",
        startDate: new Date(2018, 8, 26, 12, 0),
        endDate: new Date(2018, 8, 26, 13, 35),
        recurrenceRule: "FREQ=YEARLY;BYWEEKNO=24;BYDAY=TH,FR"
    }, {
        roomId: 4,
        clientId: 3,
        text: "Meeting type 7",
        startDate: new Date(2018, 8, 26, 14, 30),
        endDate: new Date(2018, 8, 26, 15, 45),
        recurrenceRule: "FREQ=MONTHLY;BYMONTHDAY=28;COUNT=1"
    }, {
        roomId: 5,
        clientId: 4,
        text: "Meeting type 8",
        startDate: new Date(2018, 8, 1, 9, 30),
        endDate: new Date(2018, 8, 1, 13),
        recurrenceRule: "FREQ=YEARLY;BYYEARDAY=148"
    },
    {
        roomId: 1,
        clientId: 4,
        text: "new booking",
        startDate: new Date(2018, 8, 1, 14, 30),
        endDate: new Date(2018, 8, 1, 15, 30)
    }
];

let rooms: Room[] = [
    {
        text: "Room Blue",
        id: 1,
        color: "#425fac",
        image: "./src/img/blue.png"
    }, {
        text: "Room Red",
        id: 2,
        color: "#dd2235",
        image: "./src/img/red.png"
    }, {
        text: "Room 101",
        id: 3,
        color: "#8dca93",
        image: "./src/img/green.png"
    }, {
        text: "Room 404",
        id: 4,
        color: "#e1c539",
        image: "./src/img/yellow.png"
    }, {
        text: "Conference Room",
        id: 5,
        color: "#9bc7df",
        image: "./src/img/teal.png"
    }
];

@Injectable()
export class Service {
    getAppointments(): Appointment[] {
        return appointments;
    }
    getRooms(): Room[] {
        return rooms;
    }
    getClients(): Client[] {
        return clients;
    }
}
