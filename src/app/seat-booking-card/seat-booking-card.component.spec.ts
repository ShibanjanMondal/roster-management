import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatBookingCardComponent } from './seat-booking-card.component';

describe('SeatBookingCardComponent', () => {
  let component: SeatBookingCardComponent;
  let fixture: ComponentFixture<SeatBookingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatBookingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatBookingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
