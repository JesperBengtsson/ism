import { IBundle }  from './ibundle';

export interface ISlide {
    id: number;
    bundleId: number;
    name: string;
    image: string;
    title: string;
    text: string;
    bundle: IBundle;
}