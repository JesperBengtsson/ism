import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { DataService } from './data.service';

import 'hammerjs';

import { DxDateBoxModule } from "devextreme-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'angular-bootstrap-md';
import { DxSchedulerModule, DxTemplateModule, DxContextMenuModule, DxCheckBoxModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
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
    DxCheckBoxModule,
    DxContextMenuModule,
    DxDateBoxModule,
    DxTemplateModule,
    DxSchedulerModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
