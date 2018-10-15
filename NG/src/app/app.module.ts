import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { DataService } from './data.service';
import { CarouselModule } from 'angular-bootstrap-md';
import { MaterialModule } from './material.module';


@NgModule({
    declarations: [
        AppComponent,
        RoutingComponents
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        CarouselModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
