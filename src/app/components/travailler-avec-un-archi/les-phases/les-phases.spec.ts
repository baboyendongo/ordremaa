import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesPhases } from './les-phases';

describe('LesPhases', () => {
  let component: LesPhases;
  let fixture: ComponentFixture<LesPhases>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LesPhases]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LesPhases);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
