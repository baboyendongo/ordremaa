import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mediatheque } from './mediatheque';

describe('Mediatheque', () => {
  let component: Mediatheque;
  let fixture: ComponentFixture<Mediatheque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mediatheque]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mediatheque);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
