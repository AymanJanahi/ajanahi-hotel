import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesGymComponent } from './ladies-gym.component';

describe('LadiesGymComponent', () => {
  let component: LadiesGymComponent;
  let fixture: ComponentFixture<LadiesGymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadiesGymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadiesGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
