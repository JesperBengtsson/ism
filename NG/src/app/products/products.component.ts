import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var jquery :any;
declare var $ :any;

import 'hammerjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {$("#lightbox").carousel({
    swipe: 30 // percent-per-second, default is 50. Pass false to disable swipe
  });
  }




}
