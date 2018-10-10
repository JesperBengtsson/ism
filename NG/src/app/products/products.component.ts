import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

declare var $: any;

import 'hammerjs';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

    constructor(private _route: Router) { }

    countDown: Subscription;
    timer = (60 * 3);

    //route change after settime
    startTimer(time: number): Subscription {
        return interval(time).subscribe(() => {
            if (this.timer > 0) {
                if(this._route.url !== '/products') {
                    this.countDown.unsubscribe();
                }
                this.timer--;
            }
            if (this.timer === 0) {
                this._route.navigate(['/home']);
                this.countDown.unsubscribe();
            }
        });
    }

    ngOnInit() {
        this.countDown = this.startTimer(1000);

        $('#productCarousel').on('hidden.bs.modal', function () {
            $('.collapse').collapse('hide');
        });
    }

    activeSlideChange(event: any) {
        $('.collapse').collapse('hide');
    }

}
