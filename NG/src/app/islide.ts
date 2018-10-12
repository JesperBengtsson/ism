import { IBundle }  from './ibundle';

export interface ISlide {
    id: number;
    bundleId: number;
    image: string;
    name: string;
    text: string;
    bundle: IBundle;
}