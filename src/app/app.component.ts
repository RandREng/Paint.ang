import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from './Services/api.service';
import { BroadcastService, MsalService } from '..//msal-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'testang';

  constructor() {
  }



  ngOnInit() {
  }

 ngOnDestroy() {
  }
}
