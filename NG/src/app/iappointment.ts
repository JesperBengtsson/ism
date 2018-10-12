import { IRoom } from './iroom';
import { IClient } from './iclient';

export interface IAppointment {
    id: number;
    roomId: number;
    clientId?: number;
    text: string;
    startDate: Date;
    endDate: Date;
    recurrenceRule?: string;
    recurrenceException?: string;
    room: IRoom;
    client?: IClient;
}