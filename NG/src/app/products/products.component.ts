import { Component, OnInit, ViewChild, HostListener, Host } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

declare var jquery :any;
declare var $ :any;

import 'hammerjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
  constructor(private router : Router) { }

  countDown: Subscription;
    timer = (60 * 30);


    startTimer(time: number): Subscription {
        return interval(time).subscribe(() => {
            if(this.timer > 0) {
                this.timer--;
            }
            if(this.timer === 0) {
                this.router.navigate(['']);
                this.countDown.unsubscribe();
            }
        });
    }

  ngOnInit() {
    this.countDown = this.startTimer(1000);

    $('#carousel').on('hidden.bs.modal', function () {
        $('.collapse').collapse('hide');
      });
  }

  activeSlideChange(event: any){
    $('.collapse').collapse('hide');
  }

}
