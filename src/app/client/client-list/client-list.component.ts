import { Component, OnInit } from '@angular/core';
import { ClientItem } from 'src/app/Services/models/ClientItem.model';
import { ApiService } from 'src/app/Services/api.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  errorReceived: boolean;
  clients: ClientItem[];

  constructor(private service: ApiService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.errorReceived = false;
    this.service.getClients()
      .subscribe(
        (clients => {
          this.clients = clients;
        }),
        (err => {
          this.errorReceived = true;
        }

        )
      );
  }


}
