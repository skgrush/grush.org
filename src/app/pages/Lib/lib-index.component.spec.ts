import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibIndexComponent } from './lib-index.component';

describe('LibComponent', () => {
  let component: LibIndexComponent;
  let fixture: ComponentFixture<LibIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibIndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
