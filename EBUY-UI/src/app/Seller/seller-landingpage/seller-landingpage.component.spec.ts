import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerLandingpageComponent } from './seller-landingpage.component';

describe('SellerLandingpageComponent', () => {
  let component: SellerLandingpageComponent;
  let fixture: ComponentFixture<SellerLandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerLandingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerLandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
