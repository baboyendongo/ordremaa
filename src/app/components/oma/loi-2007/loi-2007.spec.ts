import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loi2007 } from './loi-2007';

describe('Loi2007', () => {
  let component: Loi2007;
  let fixture: ComponentFixture<Loi2007>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Loi2007]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loi2007);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
