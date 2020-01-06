import { Component, OnInit, Input, EventEmitter, Output, ViewChildren, QueryList } from '@angular/core';
import { PageResult } from 'src/app/Services/models/PageResult.model';
import { BidListItem } from 'src/app/Services/models/BidListItem.model';
import { NgbdSortableHeader, SortEvent, SortDirection } from 'src/common/directives/sortable.directive';
import { ApiService } from 'src/app/Services/api.service';

export interface PageEvent extends SortEvent {
  page: number;
}
@Component({
  selector: 'app-bid-paged-list',
  templateUrl: './bid-paged-list.component.html',
  styleUrls: ['./bid-paged-list.component.scss']
})
export class BidPagedListComponent implements OnInit {
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  @Input()
  set clientId(val: number) {
    this._clientId = val;
    this.getPage();
  }
  get clientId(): number { return this._clientId; }

  private _clientId?: number;
  data: PageResult<BidListItem>;
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
    this.apiService.getBids(this.page, this.sortColumn, this.sortDirection, this.clientId).subscribe({
      next: (result: PageResult<BidListItem>) => {
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
