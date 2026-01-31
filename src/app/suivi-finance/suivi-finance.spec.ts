import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviFinance } from './suivi-finance';

describe('SuiviFinance', () => {
  let component: SuiviFinance;
  let fixture: ComponentFixture<SuiviFinance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuiviFinance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviFinance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
