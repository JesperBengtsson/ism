import { Injectable } from '@angular/core';

export class Room {
    text: string;
    id: number;
    color: string;
    avatar: string;
	description: string;
}
/*
export class Room {
    text: string;
    conferenceRoomID: number;
}*/
export class Data {
    text: string;
    roomID: number;
    startDate: Date;
    endDate: Date;
}



let rooms: Room[] = [{
    text : "Blue",
    id: 1,
    color: "#425fac",
    avatar: "src/img/blue.png",
    description: "Blue"
}, {
    text : "Red",
    id: 2,
    color: "#dd2235",
    avatar: "src/img/red.png",
    description: "Red"
}
];
/*
let conferenceRoom: Room[] = [{
    text : "Blue",
    conferenceRoomID : 1
}, {
    text : "Red",
    conferenceRoomID : 2
}

];

*/
let data: Data[] = [{ 
        text: "Helen",
        roomID: 2,
        startDate: new Date(2018, 7, 2, 9, 30),
        endDate: new Date(2018, 7, 2, 11, 30)
    }, {
        text: "Helen",
        roomID: 2,
       startDate: new Date(2018, 7, 11, 9, 30),
        endDate: new Date(2018, 7, 12, 11, 30)
    }, {
        text: "Alex",
        roomID: 1,
        startDate: new Date(2018, 7, 3, 9, 30),
        endDate: new Date(2018, 7, 3, 11, 30)
    }, {
        text: "Alex",
        roomID: 1,
        startDate: new Date(2018, 7, 12, 12, 0),
        endDate: new Date(2018, 7, 12, 13, 0)
    }, {
        text: "Alex",
        roomID: 2,
        startDate: new Date(2018, 7, 17, 9, 30),
        endDate: new Date(2018, 7, 17, 11, 30)
    }, {
        text: "Stan",
        roomID: 1,
        startDate: new Date(2018, 7, 8, 9, 30),
        endDate: new Date(2018, 7, 8, 11, 30)
    }, {
        text: "Stan",
        roomID: 1,
        startDate: new Date(2018, 7, 29, 9, 30),
        endDate: new Date(2018, 7, 29, 11, 30)
    }, {
        text: "Stan",
        roomID: 1,
        startDate: new Date(2018, 7, 31, 9, 30),
        endDate: new Date(2018, 7, 31, 11, 30)
    },
     {
        text: "Rachel",
        roomID: 2,
        startDate: new Date(2018, 7, 5, 9, 30),
        endDate: new Date(2018, 7, 5, 11, 30)
    }, {
        text: "Rachel",
        roomID: 2,
        startDate: new Date(2018, 7, 8, 9, 30),
        endDate: new Date(2018, 7, 8, 11, 30)
    }, {
        text: "Rachel",
        roomID: 1,
        startDate: new Date(2018, 7, 22, 9, 30),
        endDate: new Date(2018, 7, 22, 11, 30)
    }, {
        text: "Kelly",
        roomID: 2,
        startDate: new Date(2018, 7, 16, 9, 30),
        endDate: new Date(2018, 7, 16, 11, 30)
    }, {
        text: "Kelly",
        roomID: 2,
        startDate: new Date(2018, 7, 30, 9, 30),
        endDate: new Date(2018, 7, 30, 11, 30)
    }];
	
@Injectable()
export class Service {
	getRooms() {
		return rooms;
	}
    getData() {
        return data;
    }
/*    getConferenceRoom() {
        return conferenceRoom;
    }*/
}
