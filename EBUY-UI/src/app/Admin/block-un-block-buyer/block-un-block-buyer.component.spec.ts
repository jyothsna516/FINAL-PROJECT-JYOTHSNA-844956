import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockUnBlockBuyerComponent } from './block-un-block-buyer.component';

describe('BlockUnBlockBuyerComponent', () => {
  let component: BlockUnBlockBuyerComponent;
  let fixture: ComponentFixture<BlockUnBlockBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockUnBlockBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockUnBlockBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
