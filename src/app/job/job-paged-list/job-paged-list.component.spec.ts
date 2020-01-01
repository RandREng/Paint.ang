import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPagedListComponent } from './job-paged-list.component';

describe('JobPagedListComponent', () => {
  let component: JobPagedListComponent;
  let fixture: ComponentFixture<JobPagedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPagedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPagedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
