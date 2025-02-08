import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BplAndNskuComponent } from './bpl-and-nsku.component';

describe('BplAndNskuComponent', () => {
  let component: BplAndNskuComponent;
  let fixture: ComponentFixture<BplAndNskuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BplAndNskuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BplAndNskuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
