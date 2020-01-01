import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidPagedListComponent } from './bid-paged-list.component';

describe('BidPagedListComponent', () => {
  let component: BidPagedListComponent;
  let fixture: ComponentFixture<BidPagedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidPagedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidPagedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
