export interface IAppointment {
    id: number;
    roomId: number;
    clientId?: number;
    text: string;
    startDate: Date;
    endDate: Date;
    recurrenceRule?: string;
    recurrenceException?: string;
}