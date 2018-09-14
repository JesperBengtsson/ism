import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ISlide } from './islide';
import { IBundle } from './ibundle';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = '';

  slides: ISlide[] = [];
  bundles: IBundle[] = [];
  
  public SortEmmitter = new EventEmitter<string>();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private _http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/api/';
  }

  emitSortChange(str: string) {
    this.SortEmmitter.emit(str);
  }

    // ------------- Slides
  // Update the local slide array
  pushGlobMovie(slides: ISlide[]) {
    this.slides = slides;
  }
  getCachedSlides(): ISlide[] { return this.slides; }
  getAllSlides(): Observable<ISlide[]> {
    return this._http.get<ISlide[]>('http://localhost:8080/api/allslides');
  }

  // Update the remove slide db from local
  postSlide(slide: ISlide) {
    return this._http.post<string>('http://localhost:8080/api/postslide', slide, this.httpOptions);
}


    // ------------- Bundles
  // Update the local bundle array
  pushGlobBundle(bundles: IBundle[]) {
    this.bundles = bundles;
  }
  getCachedBundles(): IBundle[] { return this.bundles; }
  getAllBundles(): Observable<IBundle[]> {
    return this._http.get<IBundle[]>('http://localhost:8080/api/allbundles');
  }

  // Update the remove bundle db from local
  postBundle(bundle: IBundle) {
    return this._http.post<string>('http://localhost:8080/api/postbundle', bundle, this.httpOptions);
  }
  

  cacheData() {
    this._http.get<ISlide[]>('http://localhost:8080/api/allslides').subscribe( slides => { this.slides = slides; });
    this._http.get<IBundle[]>('http://localhost:8080/api/allbundles').subscribe( bundles => { this.bundles = bundles; });
  }

}
