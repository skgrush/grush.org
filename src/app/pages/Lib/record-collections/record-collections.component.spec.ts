import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordCollectionsComponent } from './record-collections.component';

describe('RecordCollectionsComponent', () => {
  let component: RecordCollectionsComponent;
  let fixture: ComponentFixture<RecordCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordCollectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
