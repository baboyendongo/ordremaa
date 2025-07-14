import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravaillerAvecUnArchi } from './travailler-avec-un-archi';

describe('TravaillerAvecUnArchi', () => {
  let component: TravaillerAvecUnArchi;
  let fixture: ComponentFixture<TravaillerAvecUnArchi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravaillerAvecUnArchi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravaillerAvecUnArchi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
