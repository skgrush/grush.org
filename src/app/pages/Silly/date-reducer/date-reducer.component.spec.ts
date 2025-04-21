import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateReducerComponent } from './date-reducer.component';

describe('DateReducerComponent', () => {
  let component: DateReducerComponent;
  let fixture: ComponentFixture<DateReducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateReducerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateReducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
