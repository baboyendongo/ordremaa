import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacterNous } from './contacter-nous';

describe('ContacterNous', () => {
  let component: ContacterNous;
  let fixture: ComponentFixture<ContacterNous>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContacterNous]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacterNous);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
