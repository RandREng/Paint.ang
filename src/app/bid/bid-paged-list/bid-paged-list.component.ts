import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PageResult } from 'src/app/Services/models/PageResult.model';
import { BidListItem } from 'src/app/Services/models/BidListItem.model';

@Component({
  selector: 'app-bid-paged-list',
  templateUrl: './bid-paged-list.component.html',
  styleUrls: ['./bid-paged-list.component.scss']
})
export class BidPagedListComponent implements OnInit {
  @Input() data: PageResult<BidListItem>;
  @Output()  pageChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  pageChanged() {
    this.pageChange.emit(this.data.currentPage);
  }
}
