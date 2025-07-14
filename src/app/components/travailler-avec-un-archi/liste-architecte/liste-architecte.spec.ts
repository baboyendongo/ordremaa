import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeArchitecte } from './liste-architecte';

describe('ListeArchitecte', () => {
  let component: ListeArchitecte;
  let fixture: ComponentFixture<ListeArchitecte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeArchitecte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeArchitecte);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
