import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  InteractiveReservationCalendarModule,
} from 'interactive-reservation-calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanBoxComponent } from './plan-box/plan-box.component';

@NgModule({
  declarations: [	
    AppComponent,
      PlanBoxComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    InteractiveReservationCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
