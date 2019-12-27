import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ClientDetails } from 'src/app/Services/models/ClientDetails.models';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {
  errorReceived: boolean;
  client: ClientDetails;

  constructor(private service: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id']; // (+) converts string 'id' to a number
      this.getClient(id, 1);

    });
  }

  getClient(id: number, page: number) {
    this.service.getClient(id, page).subscribe(
      (clients => {
        this.client = clients;
      }),
      (err => {
        this.errorReceived = true;
      }

      )
    );
  }

  pageChange() {
    this.getClient(this.client.id, this.client.jobsPage.currentPage);
  }

}
