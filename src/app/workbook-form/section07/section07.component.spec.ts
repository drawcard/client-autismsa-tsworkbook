import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section07Component } from './section07.component';

describe('Section07Component', () => {
  let component: Section07Component;
  let fixture: ComponentFixture<Section07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
