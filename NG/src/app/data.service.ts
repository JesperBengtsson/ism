import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor() { }
}
