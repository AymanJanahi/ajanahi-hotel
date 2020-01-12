import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheeshaCafeComponent } from './sheesha-cafe.component';

describe('SheeshaCafeComponent', () => {
  let component: SheeshaCafeComponent;
  let fixture: ComponentFixture<SheeshaCafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheeshaCafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheeshaCafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
