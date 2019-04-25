import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Resform5Component } from './resform5.component';

describe('Resform5Component', () => {
  let component: Resform5Component;
  let fixture: ComponentFixture<Resform5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Resform5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Resform5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
