import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { DataService } from './data.service';


import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DxSchedulerModule, DxTemplateModule, DxContextMenuModule, DxCheckBoxModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CarouselModule } from 'angular-bootstrap-md';
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
    CommonModule,
    DxCheckBoxModule,
    DxContextMenuModule,
    DxTemplateModule,
    DxSchedulerModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

