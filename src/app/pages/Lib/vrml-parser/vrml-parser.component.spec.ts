import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VrmlParserComponent } from './vrml-parser.component';

describe('VrmlParserComponent', () => {
  let component: VrmlParserComponent;
  let fixture: ComponentFixture<VrmlParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VrmlParserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VrmlParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
