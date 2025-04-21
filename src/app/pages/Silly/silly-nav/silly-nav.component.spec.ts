import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SillyNavComponent } from './silly-nav.component';

describe('SillyNavComponent', () => {
  let component: SillyNavComponent;
  let fixture: ComponentFixture<SillyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SillyNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SillyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
