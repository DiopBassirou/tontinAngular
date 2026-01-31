import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesTontine } from './mes-tontine';

describe('MesTontine', () => {
  let component: MesTontine;
  let fixture: ComponentFixture<MesTontine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesTontine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesTontine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
