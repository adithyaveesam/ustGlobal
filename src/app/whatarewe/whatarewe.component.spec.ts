import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatareweComponent } from './whatarewe.component';

describe('WhatareweComponent', () => {
  let component: WhatareweComponent;
  let fixture: ComponentFixture<WhatareweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatareweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatareweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
