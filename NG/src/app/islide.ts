import { IBundle }  from './ibundle';

export interface ISlide {
    id: number;
    bundleId: number;
    image: string;
    title: string;
    text: string;
    bundle: IBundle;
}