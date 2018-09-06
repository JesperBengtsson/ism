import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { Service } from './calendar/calendar.service';

import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DxSchedulerModule, DxTemplateModule, DxTabsModule, DxContextMenuModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
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

declare var Hammer: any;


@NgModule({
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
})

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    'pan': { direction: Hammer.DIRECTION_All },
    'swipe': { direction: Hammer.DIRECTION_VERTICAL }
  };

  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      
          inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
          recognizers: [
            [Hammer.Swipe, {
              direction: Hammer.DIRECTION_HORIZONTAL
            }]
          ]
    });
    return mc;
  }
}


document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.log(err));
});
