import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section08Component } from './section08.component';

describe('Section08Component', () => {
  let component: Section08Component;
  let fixture: ComponentFixture<Section08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
