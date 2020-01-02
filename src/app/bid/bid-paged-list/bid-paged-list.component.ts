import { Component, OnInit, Input, EventEmitter, Output, ViewChildren, QueryList } from '@angular/core';
import { PageResult } from 'src/app/Services/models/PageResult.model';
import { BidListItem } from 'src/app/Services/models/BidListItem.model';
import { NgbdSortableHeader , SortEvent, SortDirection } from 'src/common/directives/sortable.directive';
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
  private _clientId?: number;

  @Input()
    set clientId(val: number) {
      console.log('input changed ' + val);
      this._clientId = val;
      this.getBidPage();
    }
    get clientId(): number {return this._clientId; }

  data: PageResult<BidListItem>;
//  @Output()  pageChange = new EventEmitter();

  @ViewChildren(NgbdSortableHeader ) headers: QueryList<NgbdSortableHeader >;

  sortColumn: string;
  sortDirection: SortDirection;
  page: number = 1;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  pageChanged() {
    this.getBidPage();
  }

  getBidPage() {
    this.apiService.getBids(this.page, this.clientId).subscribe({
        next: (result: PageResult<BidListItem>) => {
          this.data = result;
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        }
      });
  }

  onSort({column, direction}: SortEvent) {
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
