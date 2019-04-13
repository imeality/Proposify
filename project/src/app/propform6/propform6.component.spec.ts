import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Propform6Component } from './propform6.component';

describe('Propform6Component', () => {
  let component: Propform6Component;
  let fixture: ComponentFixture<Propform6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Propform6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Propform6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
