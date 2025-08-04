import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaMissionArchitecte } from './la-mission-architecte';

describe('LaMissionArchitecte', () => {
  let component: LaMissionArchitecte;
  let fixture: ComponentFixture<LaMissionArchitecte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaMissionArchitecte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaMissionArchitecte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
