import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageResult } from 'src/app/Services/models/PageResult.model';
import { JobItem } from 'src/app/Services/models/JobItem.model';

@Component({
  selector: 'app-job-paged-list',
  templateUrl: './job-paged-list.component.html',
  styleUrls: ['./job-paged-list.component.scss']
})
export class JobPagedListComponent implements OnInit {
  @Input() data: PageResult<JobItem>;
  @Output() pageChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  pageChanged() {
    console.log(`JobPagedListComponent - pageChanged ${this.data.currentPage}`);
    this.pageChange.emit(this.data.currentPage);
  }

}
