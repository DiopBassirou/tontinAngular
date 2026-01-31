import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedNavigation } from './shared-navigation';

describe('SharedNavigation', () => {
  let component: SharedNavigation;
  let fixture: ComponentFixture<SharedNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedNavigation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedNavigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
