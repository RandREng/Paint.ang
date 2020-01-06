import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Bid } from 'src/app/Services/models/BidListItem.model';

@Component({
  selector: 'app-bid-details',
  templateUrl: './bid-details.component.html',
  styleUrls: ['./bid-details.component.scss']
})
export class BidDetailsComponent implements OnInit {
  data: Bid;
  id: number;

  constructor(private service: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      this.getData();
    });
  }

  getData() {
    this.service.getBid(this.id).subscribe({
      next: (data) => { this.data = data; }
    });

  }

}
