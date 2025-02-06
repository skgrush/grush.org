import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatTimeIsItInComponent } from './what-time-is-it-in.component';

describe('WhatTimeIsItInComponent', () => {
  let component: WhatTimeIsItInComponent;
  let fixture: ComponentFixture<WhatTimeIsItInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatTimeIsItInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatTimeIsItInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
