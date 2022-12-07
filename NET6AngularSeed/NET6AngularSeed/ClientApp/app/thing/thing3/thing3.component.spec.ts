import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thing3Component } from './thing3.component';

describe('Thing3Component', () => {
  let component: Thing3Component;
  let fixture: ComponentFixture<Thing3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Thing3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Thing3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
