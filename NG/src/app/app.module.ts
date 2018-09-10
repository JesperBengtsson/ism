import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { Service } from './calendar/calendar.service';

import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DxSchedulerModule, DxTemplateModule, DxTabsModule, DxContextMenuModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CarouselModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonsModule,
    CarouselModule,
    CommonModule,
    DxContextMenuModule,
    DxTabsModule,
    DxTemplateModule,
    DxSchedulerModule,
    FormsModule,
    WavesModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }


document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.log(err));
});
