import { ISlideBundle }  from './islidebundle';

export interface ISlide {
    id: number;
    bundleId: number;
    image: string;
    title: string;
    text: string;
    bundle: ISlideBundle;
}