import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TontineSelectionner } from './tontine-selectionner';

describe('TontineSelectionner', () => {
  let component: TontineSelectionner;
  let fixture: ComponentFixture<TontineSelectionner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TontineSelectionner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TontineSelectionner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
