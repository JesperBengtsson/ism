import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

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

  ngOnInit() {
  }

  @ViewChild('carousel') public el: any;

    @HostListener('swipeleft', ['$event']) public swipePrev(event: any) {
        this.el.previousSlide();
    }

    @HostListener('swiperight', ['$event']) public swipeNext(event: any) {
        this.el.nextSlide();
    }


}
