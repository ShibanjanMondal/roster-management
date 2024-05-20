import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatBookingCalendarComponent } from './seat-booking-calendar.component';

describe('SeatBookingCalendarComponent', () => {
  let component: SeatBookingCalendarComponent;
  let fixture: ComponentFixture<SeatBookingCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatBookingCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatBookingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
