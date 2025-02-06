import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibNavComponent } from './lib-nav.component';

describe('LibNavComponent', () => {
  let component: LibNavComponent;
  let fixture: ComponentFixture<LibNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
