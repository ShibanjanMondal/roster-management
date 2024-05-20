import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-booking-calendar',
  templateUrl: './seat-booking-calendar.component.html',
  styleUrls: ['./seat-booking-calendar.component.scss']
})

export class SeatBookingCalendarComponent implements OnInit {
  calendarDates: Date[] = [];
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  year: number = 2024;
  month: number = 4;

  noOfEmployee: number[] = [0,1,2,3];


  constructor() { }

  ngOnInit(): void {
    this.calendarDates = this.getAllDays(2024, 4);
  }

  getAllDays(year: number, month: number) {
    const date = new Date(year, month, 1);
    const dates = [];

    while (date.getMonth() === month) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    console.log(dates);
    return dates;
  }
}
