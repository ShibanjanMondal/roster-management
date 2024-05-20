import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthYearSelectorRibbonComponent } from './month-year-selector-ribbon.component';

describe('MonthYearSelectorRibbonComponent', () => {
  let component: MonthYearSelectorRibbonComponent;
  let fixture: ComponentFixture<MonthYearSelectorRibbonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthYearSelectorRibbonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthYearSelectorRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
