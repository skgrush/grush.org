import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisSiteComponent } from './this-site.component';

describe('ThisSiteComponent', () => {
  let component: ThisSiteComponent;
  let fixture: ComponentFixture<ThisSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThisSiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThisSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
