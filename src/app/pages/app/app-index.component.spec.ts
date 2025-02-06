import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIndexComponent } from './app-index.component';

describe('AppComponent', () => {
  let component: AppIndexComponent;
  let fixture: ComponentFixture<AppIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
