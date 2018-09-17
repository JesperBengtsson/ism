import { ISlide } from './islide';

export interface IBundle {
    id: number;
    name: string;
    slides: ISlide[];
}