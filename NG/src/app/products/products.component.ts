import { Component, OnInit, ViewChild, HostListener, Host } from '@angular/core';

declare var jquery :any;
declare var $ :any;

import 'hammerjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  public myInterval: number = 0;

  constructor() { }

  ngOnInit() {
    $('#carousel').on('hidden.bs.modal', function () {
        $('.collapse').collapse('hide');
      });
  }

  activeSlideChange(event: any){
    $('.collapse').collapse('hide');
  }

}
