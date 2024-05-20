import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YesNoSelectorComponent } from './yes-no-selector/yes-no-selector.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { SeatBookingCardComponent } from './seat-booking-card/seat-booking-card.component';
import { NavRibbonComponent } from './nav-ribbon/nav-ribbon.component';
import { LoginComponent } from './login/login.component';
import { SeatBookingCalendarComponent } from './seat-booking-calendar/seat-booking-calendar.component';
import { MonthYearSelectorRibbonComponent } from './month-year-selector-ribbon/month-year-selector-ribbon.component';

@NgModule({
  declarations: [
    AppComponent,
    YesNoSelectorComponent,
    EmployeeCardComponent,
    SeatBookingCardComponent,
    NavRibbonComponent,
    LoginComponent,
    SeatBookingCalendarComponent,
    MonthYearSelectorRibbonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
