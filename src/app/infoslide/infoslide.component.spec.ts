import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoslideComponent } from './infoslide.component';

describe('InfoslideComponent', () => {
  let component: InfoslideComponent;
  let fixture: ComponentFixture<InfoslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
