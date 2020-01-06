import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { PageResult } from 'src/app/Services/models/PageResult.model';
import { JobItem } from 'src/app/Services/models/JobItem.model';
import { SortDirection, NgbdSortableHeader, SortEvent } from 'src/common/directives/sortable.directive';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-job-paged-list',
  templateUrl: './job-paged-list.component.html',
  styleUrls: ['./job-paged-list.component.scss']
})
export class JobPagedListComponent implements OnInit {
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  @Input()
  set clientId(val: number) {
    this._clientId = val;
    this.getPage();
  }
  get clientId(): number { return this._clientId; }

  private _clientId?: number;
  data: PageResult<JobItem>;
  sortColumn: string;
  sortDirection: SortDirection;
  page: number = 1;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  pageChanged() {
    this.getPage();
  }

  getPage() {
    this.apiService.getJobs(this.page, this.sortColumn, this.sortDirection, this.clientId).subscribe({
      next: (result: PageResult<JobItem>) => {
        this.data = result;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.sortColumn = column;
    this.sortDirection = direction;
    this.pageChanged();
  }

}
