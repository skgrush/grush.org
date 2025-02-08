import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GupComponent } from './gup.component';

describe('GupComponent', () => {
  let component: GupComponent;
  let fixture: ComponentFixture<GupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
