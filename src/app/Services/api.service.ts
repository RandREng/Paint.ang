import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { WeatherForecast } from './models/weatherForecast.model';
import { ClientItem } from './models/ClientItem.model';
import { environment } from 'src/environments/environment';
import { ClientDetails } from './models/ClientDetails.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
  }

  getClients(): Observable<ClientItem[]> {
    return this.http.get<Array<ClientItem>>(`${this.url}/api/clients`);
  }

  getClient(id: number, page: number): Observable<ClientDetails> {
    return this.http.get<ClientDetails>(`${this.url}/api/clients/${id}?page=${page}`);
  }


  getWeatherHttps(): Observable<Array<WeatherForecast>> {
    return this.http.get<Array<WeatherForecast>>(`https://paintapi20191220121929.azurewebsites.net/api/clients`);
  }

  getWeatherHttp(): Observable<Array<WeatherForecast>> {
    return this.http.get<Array<WeatherForecast>>(`https://paintapi20191220121929.azurewebsites.net/api/clients`);
  }


  getWeatherHttpsSecure(): Observable<Array<WeatherForecast>> {
    return this.http.get<Array<WeatherForecast>>(`https://paintapi20191220121929.azurewebsites.net/api/clients`);
  }

  getWeatherHttpSecure(): Observable<Array<WeatherForecast>> {
    return this.http.get<Array<WeatherForecast>>(`https://paintapi20191220121929.azurewebsites.net/api/clients`);
  }
}
