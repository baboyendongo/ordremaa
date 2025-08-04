import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementInterieur } from './reglement-interieur';

describe('ReglementInterieur', () => {
  let component: ReglementInterieur;
  let fixture: ComponentFixture<ReglementInterieur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReglementInterieur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReglementInterieur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
