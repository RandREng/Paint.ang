import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ClientDetails } from 'src/app/Services/models/ClientDetails.model';
import { PageResult } from 'src/app/Services/models/PageResult.model';
import { JobItem } from 'src/app/Services/models/JobItem.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {
  client: ClientDetails;

  id: number;

  constructor(private service: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
      this.getClient();
    });
  }

  getClient() {
    this.service.getClient(this.id).subscribe(
      (clients => this.client = clients)
    );
  }

}
