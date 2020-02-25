import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockUnBlockSellerComponent } from './block-un-block-seller.component';

describe('BlockUnBlockSellerComponent', () => {
  let component: BlockUnBlockSellerComponent;
  let fixture: ComponentFixture<BlockUnBlockSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockUnBlockSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockUnBlockSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
