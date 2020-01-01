import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ClientItem } from './models/ClientItem.model';
import { environment } from 'src/environments/environment';
import { ClientDetails } from './models/ClientDetails.model';
import { BidListItem, Bid } from './models/BidListItem.model';
import { AlertService } from 'src/common/alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string;

  constructor(private http: HttpClient, private alertService: AlertService) {
    this.url = environment.apiUrl;
  }

  getClients(): Observable<ClientItem[]> {
    return this.http.get<Array<ClientItem>>(`${this.url}/api/clients`)
    .pipe(
      catchError(err => this.handleError(err))
    );
  }

  getClient(id: number, page: number): Observable<ClientDetails> {
    return this.http.get<ClientDetails>(`${this.url}/api/clients/${id}?page=${page}`)
    .pipe(
      catchError(err => this.handleError(err))
    );
  }

  getBids(): Observable<BidListItem[]> {
    return this.http.get<Array<BidListItem>>(`${this.url}/api/bids`)
    .pipe(
      catchError(err => this.handleError(err))
    );
  }

  getBid(id: number): Observable<Bid> {
    return this.http.get<Bid>(`${this.url}/api/bids/${id}`)
    .pipe(
      catchError(err => this.handleError(err))
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      this.alertService.AddErrorMessage(`An error occurred:, ${error.error.message}`);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.alertService.AddErrorMessage(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
