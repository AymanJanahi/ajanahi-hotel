import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenGymComponent } from './men-gym.component';

describe('MenGymComponent', () => {
  let component: MenGymComponent;
  let fixture: ComponentFixture<MenGymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenGymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
