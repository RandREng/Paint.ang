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

  loggedIn: boolean;
  public userInfo: any = null;
  private subscription: Subscription;
//  public isIframe: boolean;

  constructor(private broadcastService: BroadcastService, private authService: MsalService, private service: ApiService) {
    //  This is to avoid reload during acquireTokenSilent() because of hidden iframe
//    this.isIframe = window !== window.parent && !window.opener;
  }


  login() {
    const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

    if (isIE) {
      this.authService.loginRedirect();
    } else {
      this.authService.loginPopup();
    }
  }

  logout() {
   this.authService.logout();
  }


  TestHttp() {
    this.service.getWeatherHttp().subscribe(
      data => alert(`Http Secure ${data.length}`),
      err => alert(`HTTP Error ${err.message}`),
    );
  }

  TestHttps() {
    this.service.getWeatherHttps().subscribe(
      data => alert(`Http Secure ${data.length}`),
      err => alert(`HTTP Error ${err.message}`),
    );
  }

  TestHttpSecure() {
    this.service.getWeatherHttpSecure().subscribe(
      data => alert(`Http Secure ${data.length}`),
      err => alert(`HTTP Error ${err.message}`),
    );
  }

  TestHttpsSecure() {
    this.service.getWeatherHttpsSecure().subscribe(
      data => alert(`Http Secure ${data.length}`),
      err => alert(`HTTP Error ${err.message}`),
    );
  }

  ngOnInit() {

    this.broadcastService.subscribe('msal:loginFailure', (payload) => {
      console.log('login failure ' + JSON.stringify(payload));
      this.loggedIn = false;

    });

    this.broadcastService.subscribe('msal:loginSuccess', (payload) => {
      console.log('login success ' + JSON.stringify(payload));
      this.loggedIn = true;
    });

  }

 ngOnDestroy() {
    this.broadcastService.getMSALSubject().next(1);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
