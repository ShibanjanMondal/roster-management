import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoSelectorComponent } from './yes-no-selector.component';

describe('YesNoSelectorComponent', () => {
  let component: YesNoSelectorComponent;
  let fixture: ComponentFixture<YesNoSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesNoSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
