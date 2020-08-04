import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section09Component } from './section09.component';

describe('Section09Component', () => {
  let component: Section09Component;
  let fixture: ComponentFixture<Section09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
