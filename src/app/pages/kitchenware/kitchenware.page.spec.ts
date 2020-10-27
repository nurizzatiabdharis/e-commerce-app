import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenwarePage } from './kitchenware.page';

describe('KitchenwarePage', () => {
  let component: KitchenwarePage;
  let fixture: ComponentFixture<KitchenwarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchenwarePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenwarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
