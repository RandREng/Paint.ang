import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor(private service: ApiService) { }

  ngOnInit() {
  }

  TestApi() {
    this.service.getWeatherHttp().subscribe();
  }
}
