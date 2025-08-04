import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oma } from './oma';

describe('Oma', () => {
  let component: Oma;
  let fixture: ComponentFixture<Oma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Oma]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oma);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
