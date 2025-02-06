import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CavernSeerMapperComponent } from './cavern-seer-mapper.component';

describe('CavernSeerMapperComponent', () => {
  let component: CavernSeerMapperComponent;
  let fixture: ComponentFixture<CavernSeerMapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CavernSeerMapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CavernSeerMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
