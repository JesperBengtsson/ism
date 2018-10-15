import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ConferenceRoomComponent } from './conference-room/conference-room.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, data: { state: 'home' }},
    { path: 'calendar', component: CalendarComponent, data: { state: 'calendar' }},
    { path: 'about', component: AboutComponent, data: { state: 'about' }},
    { path: 'products', component: ProductsComponent, data: { state: 'products' }},
    { path: 'conference-room/:id', component: ConferenceRoomComponent, data: {state: 'conference-room'}}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 64] })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [AboutComponent, CalendarComponent, ProductsComponent, HomeComponent, ConferenceRoomComponent];

export const AppRouting = RouterModule.forRoot(routes, { 
    useHash: true
  });
