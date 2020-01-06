import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidAreaComponent } from './bid-area.component';

describe('BidAreaComponent', () => {
  let component: BidAreaComponent;
  let fixture: ComponentFixture<BidAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
