import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMembre } from './ajouter-membre';

describe('AjouterMembre', () => {
  let component: AjouterMembre;
  let fixture: ComponentFixture<AjouterMembre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterMembre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterMembre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
