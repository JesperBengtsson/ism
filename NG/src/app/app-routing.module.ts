import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    { path: 'calendar', component: CalendarComponent, data: { state: 'calendar' }},
    { path: 'about', component: AboutComponent, data: { state: 'about' }},
    { path: 'products', component: ProductsComponent, data: { state: 'products' }}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 64] })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AboutComponent, CalendarComponent, ProductsComponent];

export const AppRouting = RouterModule.forRoot(routes, { 
    useHash: true
  });
