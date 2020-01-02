import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { PageResult } from 'src/app/Services/models/PageResult.model';
import { BidListItem } from 'src/app/Services/models/BidListItem.model';
import { SortDirection } from 'src/common/directives/sortable.directive';
import { PageEvent } from '../bid-paged-list/bid-paged-list.component';

@Component({
  selector: 'app-bid-list',
  templateUrl: './bid-list.component.html',
  styleUrls: ['./bid-list.component.scss']
})
export class BidListComponent implements OnInit {
  bidPage: PageResult<BidListItem>;

  constructor(private service: ApiService) { }

  ngOnInit() {
    //    const event: PageEvent = {
    //      column: 'none',
    //      direction: '',
    //      page: 1
    //    }
    //    this.bidPageChange(event)
  }

  //  bidPageChange({ column, direction, page }: PageEvent) {
  //    console.log(column + ' - ', direction + ' - ' + page)

  //    this.service.getBids(page, null).subscribe({
  //      next: (result: PageResult<BidListItem>) => {
  //        this.bidPage = result;
  //      },
  //      error: (err: any) => {
  //        console.log(err);
  //      },
  //      complete: () => {
  //        console.log('complete');
  //      }
  //    });


  //      complete: (data: PageResult<BidListItem>) => { his.bidPage = data; }
  //    });
// }


}
