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
            {image: 'src/img/products/ismobile-blue2.jpg', description: 'Enabling the service staff to get real-time access to detailed work order information, company intranet information and other mobile service colleagues by mobile communication.'},
            {image: 'src/img/products/ismobile-blue3.jpg', description: 'Helps to plan, schedule, dispatch and monitor the resources out in the field - along with status reporting and Key performance Indicatior visibility.'},
            {image: 'src/img/products/ismobile-blue4.jpg', description: 'Comprehensive range of functions to interact and be transparent with the customer.'},
        ]
        },
        {name: 'smart meter rollout',
        caption: 'A PREDEFINED WORKFLOW FOR METER EXCHANGE',
        icon: 'src/img/red.png',
        images: [
            {image: 'src/img/products/ismobile-red1.jpg', description: 'All our customer experiences are built-in into our full-blown enterprise workforce management solution Blå Coordinator. For high-volume applications like Smart Meter Rollout, we have a specific optimized mobile workforce management package (using necessary Blå base modules) with a predefined workflow. Offered as a cloud service.'},
            {image: 'src/img/products/ismobile-red1.jpg', description: 'Real-time integration is supported by the Blå Coordinator integration adaptor (CIA). This includes work order creation, modification, assignment of resources to execute a work order, receive notifications of work orders or assignment status changes etc.'},
            {image: 'src/img/products/ismobile-red1.jpg', description: 'Begins with organizing the work into Metropolitan Statistical Areas (MSA) by using rules, automatic GIS tools or Blå Cockpit or a combination of the above. Based on the MSA information and the groups of resources available, a pre-planned time slot reservation is done.'},
            {image: 'src/img/products/ismobile-red1.jpg', description: 'Based on the information from the customer information system and the pre-planning, a letter is automatically created stating the time slot in which the work order is to be completed. The letter contains a reference on how to rebook the work order if needed.'},
        ]
        },
        {name: 'mobile workforce tools',
        caption: 'SMARTER TOOLS FOR PEOPLE IN THE FIELD',
        icon: 'src/img/yellow.png',
        images: [
            {image: 'src/img/products/ismobile-mobileworkforce1.jpg', description: 'isMobile SignE - electronic signatures made easy Enhance your Workforce Management solution with isMobile Add-on software tools for the people working in the field. One such service is isMobile SignE.'},
            {image: 'src/img/products/ismobile-mobileworkforce1.jpg', description: 'isMobile Smart Meter Tools - manage individual meters Smart Meter Tools by isMobile is a set of tools that provide field technicians with methods to directly manage individual meters.'},
            {image: 'src/img/products/ismobile-mobileworkforce1.jpg', description: 'SignE is a software service to manage hand-written signatures using any pen-equipped Android tablet. SafeSign can easily be implemented into Blå Coordinator or similar workforce management software.'},
            {image: 'src/img/products/ismobile-mobileworkforce1.jpg', description: 'SignE can also be used as a sales receipt for additional sales if the visit from the field service technician resulted in a purchased upgrade or add-on. Other uses includes subscribing to services, entering contracts and agreements etc.'},
        ]
        },
        {name: 'optimization services',
        caption: 'SMARTER ROUTE PLANNING FOR HAPPIER PEOPLE',
        icon: 'src/img/green.png',
        images: [
            {image: 'src/img/products/ismobile-optimizationservies1.jpg', description: 'APPOINTMENT OPTIMIZER is created to solve a specific problem: to quickly optimize a large number of similar assignments and create near-optimal routes. When having near-optimal routes it is easy to propose a time-slot for an appointment to the end-customer.'},
            {image: 'src/img/products/ismobile-optimizationservies1.jpg', description: 'The assignment similarity condition is simple: All the assignments in the optimization batch must have the same skill set requirements and, on average, the same duration.'},
            {image: 'src/img/products/ismobile-optimizationservies1.jpg', description: 'RESOURCE OPTIMIZER is the service for optimizing the utilization of mobile staff even in very fast-changing and dynamic operations. Resource Optimizer can use travel distances and expected road travel times to find the best situated resource for a new assignment. In addition, it also utilizes the skills of your personnel. The Resource optimizer also enables execution of appointed and non-time critical assignments when being in the area.'},
            {image: 'src/img/products/ismobile-optimizationservies1.jpg', description: 'Resource Optimizer is optimizing the utilization of mobile staff even in very fast-changing and dynamic operations. Resource Optimizer can use travel distances and expected road travel times to find the best situated resource for a new assignment. In addition, it also utilizes the skills of your personnel. The Resource optimizer also enables execution of appointed and non-time critical assignments when being in the area.'},
        ]
        },
        {name: 'logistics',
        icon: 'src/img/teal.png',
        caption: 'SMARTER EQUIPMENT TRACKING',
        images: [
            {image: 'src/img/products/ismobile-logistics1.jpg', description: 'Logistics is a logistic system for keeping track of equipment in high-volume applications like Smart Meter Rollout projects; from production site, during central storage, regional warehouse storage, truck transportation to final installation. The articles are tracked as individuals giving complete data for each article about customer, project, shipment, type, serial number, location, location type (main, sub, mobile, …) , status, etc. For handling registrations of articles in an efficient way when location is changed, isMobile Logistics has support for mobile barcode scanning using mobile phones/tablets combined with internal/external scanners.'},
            {image: 'src/img/products/ismobile-logistics1.jpg', description: 'A shipment file is a specification from the production facility containing information about the products that are contained within a specific shipment. To make Logistics aware of the products available for a specific project, the project management user interface provides the ability to import a shipment file and edit/modify the imported contents. Several shipment files may be imported into a project in order to cover projects where multiple vendors\' products will be used.'},
            {image: 'src/img/products/ismobile-logistics1.jpg', description: 'Products can either be scanned during transport in order to keep track of in-transit inventory (on a per-project basis) or after installation to keep track of what equipment has been installed at the end-user.'},
            {image: 'src/img/products/ismobile-logistics1.jpg', description: 'In addition to scanning a specific product only, the application also supports scanning a pallet or box of products using the first/last bar codes on the pallet or box. When a set of products (pallet or box) is scanned, the user has to indicate the scanning mode (single or multiple product scanning). When a set of products has been scanned, the application will notify the user if the number of products scanned is unreasonable.'},
        ]
        }
    ]

    constructor(private _route: Router) { }

    countDown: Subscription;
    timer = (180);

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
