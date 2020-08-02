import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section03Component } from './section03.component';

describe('Section03Component', () => {
  let component: Section03Component;
  let fixture: ComponentFixture<Section03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
