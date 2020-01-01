import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { PageResult } from 'src/app/Services/models/PageResult.model';
import { BidListItem } from 'src/app/Services/models/BidListItem.model';

@Component({
  selector: 'app-bid-list',
  templateUrl: './bid-list.component.html',
  styleUrls: ['./bid-list.component.scss']
})
export class BidListComponent implements OnInit {
  bidPage: PageResult<BidListItem>;

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.bidPageChange(1);
  }

  bidPageChange(page) {
    this.service.getBids(page, null).subscribe(
      (data => {
        this.bidPage = data;
      })
    );
  }


}
