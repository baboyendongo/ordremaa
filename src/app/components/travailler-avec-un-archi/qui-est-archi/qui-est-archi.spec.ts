import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiEstArchi } from './qui-est-archi';

describe('QuiEstArchi', () => {
  let component: QuiEstArchi;
  let fixture: ComponentFixture<QuiEstArchi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuiEstArchi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuiEstArchi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
