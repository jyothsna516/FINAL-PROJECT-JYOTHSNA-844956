import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbuyerProfileComponent } from './viewbuyer-profile.component';

describe('ViewbuyerProfileComponent', () => {
  let component: ViewbuyerProfileComponent;
  let fixture: ComponentFixture<ViewbuyerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbuyerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbuyerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
