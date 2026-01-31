import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerModifTontine } from './creer-modif-tontine';

describe('CreerModifTontine', () => {
  let component: CreerModifTontine;
  let fixture: ComponentFixture<CreerModifTontine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerModifTontine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerModifTontine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
