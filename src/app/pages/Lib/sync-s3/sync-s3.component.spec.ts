import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncS3Component } from './sync-s3.component';

describe('SyncS3Component', () => {
  let component: SyncS3Component;
  let fixture: ComponentFixture<SyncS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyncS3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
