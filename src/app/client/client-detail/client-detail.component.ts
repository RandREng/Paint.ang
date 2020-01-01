import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ClientDetails } from 'src/app/Services/models/ClientDetails.model';
import { PageResult } from 'src/app/Services/models/PageResult.model';
import { JobItem } from 'src/app/Services/models/JobItem.model';
import { Bid, BidListItem } from 'src/app/Services/models/BidListItem.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {
  client: ClientDetails;
  jobPage: PageResult<JobItem>;
  bidPage: PageResult<BidListItem>;

  id: number;

  constructor(private service: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      this.getClient();
      this.jobPageChange(1);
      this.bidPageChange(1);

    });
  }

  getClient() {
    this.service.getClient(this.id).subscribe(
      (clients => this.client = clients)
    );
  }

  jobPageChange(page) {
    this.service.getJobs(page, this.id).subscribe(
      (data => {
          console.log(data);
          this.jobPage = data;
        })
    );
  }

  bidPageChange(page) {
    this.service.getBids(page, this.id).subscribe(
      (data => {
        console.log(data);
        this.bidPage = data;
      })
    );
  }
}
