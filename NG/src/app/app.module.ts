import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { DataService } from './data.service';

import 'hammerjs';

import { CarouselModule } from 'angular-bootstrap-md';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        AppComponent,
        RoutingComponents
    ],
    imports: [
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        CarouselModule,
        FormsModule,
        HttpClientModule,
        MaterialModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
