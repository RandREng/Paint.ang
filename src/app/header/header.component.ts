import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { BroadcastService, MsalService } from '../..//msal-angular';
import { AuthError, AuthResponse } from 'msal';
import { AlertService } from 'src/common/alert/alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isActive = true;
  public IsAuthenticated: boolean = false;
  private subscription: Subscription;
  public userName: string = '';
  badge: number = 0;

  constructor(private broadcastService: BroadcastService, private authService: MsalService, private alertService: AlertService) {
    if (this.authService.getAccount()) {
      this.IsAuthenticated = true;
      this.userName = this.authService.getAccount().name;
    } else {
      this.IsAuthenticated = false;
    }
  }

  ngOnInit() {

    this.broadcastService.subscribe('msal:loginFailure', (payload) => {
      console.log('login failure ' + JSON.stringify(payload));
      this.IsAuthenticated = false;

    });

    this.broadcastService.subscribe('msal:loginSuccess', (payload) => {
      console.log('login success ' + JSON.stringify(payload));
      this.alertService.AddSuccessMessage('login success ' );
      this.IsAuthenticated = true;
      this.userName = this.authService.getAccount().name;
    });

    this.authService.handleRedirectCallback((redirectError: AuthError, redirectResponse: AuthResponse) => {
      if (redirectError) {
        console.error(redirectError);
        return;
      }
      console.log(redirectResponse);
    });

  }

  ngOnDestroy() {
    this.broadcastService.getMSALSubject().next(1);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  menu() {
    this.isActive = !this.isActive;
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

}
