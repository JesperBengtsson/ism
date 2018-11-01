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

    products = [
        {name: 'blå coordinator',
        caption: 'THE ENTERPRISE WORKFORCE SOLUTION',
        icon: 'src/img/blue.png',
        images: [
            {image: 'src/img/products/ismobile-blue1.jpg', description: 'Blå Coordinator is a comprehensive mobile workforce management solution that enables enterprises to mobilise their field force operations, to improve customer service by reducing lead times and to increase productivity. Blå Coordinator allows field personnel, both corporate and sub-contractors, to access enterprise processes using laptops, PDAs, smart phones and ordinary telephones.'},
            {image: 'src/img/products/ismobile-blue2.jpg', description: 'smth'},
            {image: 'src/img/products/ismobile-blue3.jpg', description: 'smth'},
            {image: 'src/img/products/ismobile-blue4.jpg', description: 'smth'},
        ]
        },
        {name: 'smart meter rollout',
        caption: 'A PREDEFINED WORKFLOW FOR METER EXCHANGE',
        icon: 'src/img/red.png',
        images: [
            {image: 'src/img/products/ismobile-red1.jpg', description: 'All our customer experiences are built-in into our full-blown enterprise workforce management solution Blå Coordinator. For high-volume applications like Smart Meter Rollout, we have a specific optimized mobile workforce management package (using necessary Blå base modules) with a predefined workflow. Offered as a cloud service.'},
            {image: 'src/img/products/ismobile-red1.jpg', description: 'smth'},
            {image: 'src/img/products/ismobile-red1.jpg', description: 'smth'},
            {image: 'src/img/products/ismobile-red1.jpg', description: 'smth'},
        ]
        },
        {name: 'mobile workforce tools',
        caption: 'SMARTER TOOLS FOR PEOPLE IN THE FIELD',
        icon: 'src/img/yellow.png',
        images: [
            {image: 'src/img/products/ismobile-mobileworkforce1.jpg', description: 'isMobile SignE - electronic signatures made easy Enhance your Workforce Management solution with isMobile Add-on software tools for the people working in the field. One such service is isMobile SignE. isMobile Smart Meter Tools - manage individual meters Smart Meter Tools by isMobile is a set of tools that provide field technicians with methods to directly manage individual meters.'},
            {image: 'src/img/products/ismobile-mobileworkforce1.jpg', description: 'smth'},
            {image: 'src/img/products/ismobile-mobileworkforce1.jpg', description: 'smth'},
            {image: 'src/img/products/ismobile-mobileworkforce1.jpg', description: 'smth'},
        ]
        },
        {name: 'optimization services',
        caption: 'SMARTER ROUTE PLANNING FOR HAPPIER PEOPLE',
        icon: 'src/img/green.png',
        images: [
            {image: 'src/img/products/ismobile-optimizationservies1.jpg', description: 'APPOINTMENT OPTIMIZER is created to solve a specific problem: to quickly optimize a large number of similar assignments and create near-optimal routes. When having near-optimal routes it is easy to propose a time-slot for an appointment to the end-customer. RESOURCE OPTIMIZER is the service for optimizing the utilization of mobile staff even in very fast-changing and dynamic operations. Resource Optimizer can use travel distances and expected road travel times to find the best situated resource for a new assignment. In addition, it also utilizes the skills of your personnel.'},
            {image: 'src/img/products/ismobile-optimizationservies1.jpg', description: 'smth'},
            {image: 'src/img/products/ismobile-optimizationservies1.jpg', description: 'smth'},
            {image: 'src/img/products/ismobile-optimizationservies1.jpg', description: 'smth'},
        ]
        },
        {name: 'logistics',
        icon: 'src/img/teal.png',
        caption: 'SMARTER EQUIPMENT TRACKING',
        images: [
            {image: 'src/img/products/ismobile-logistics1.jpg', description: 'Logistics is a logistic system for keeping track of equipment in high-volume applications like Smart Meter Rollout projects; from production site, during central storage, regional warehouse storage, truck transportation to final installation. The articles are tracked as individuals giving complete data for each article about customer, project, shipment, type, serial number, location, location type (main, sub, mobile, …) , status, etc. For handling registrations of articles in an efficient way when location is changed, isMobile Logistics has support for mobile barcode scanning using mobile phones/tablets combined with internal/external scanners.'},
            {image: 'src/img/products/ismobile-logistics1.jpg', description: 'smth'},
            {image: 'src/img/products/ismobile-logistics1.jpg', description: 'smth'},
            {image: 'src/img/products/ismobile-logistics1.jpg', description: 'smth'},
        ]
        }
    ]

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
        console.log(this.products)

        $('#productCarousel').on('hidden.bs.modal', function () {
            $('.collapse').collapse('hide');
        });
    }

    activeSlideChange(event: any) {
        $('.collapse').collapse('hide');
    }

}
