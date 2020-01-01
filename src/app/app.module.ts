import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MsalModule, MsalInterceptor, MsalAngularConfiguration } from '../msal-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './Services/api.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { HomeComponent } from './home/home.component';
import { JobDetailComponent } from './job/job-detail/job-detail.component';
import { JobEditComponent } from './job/job-edit/job-edit.component';
import { environment } from 'src/environments/environment';
import { AuthOptions, CacheOptions, SystemOptions, FrameworkOptions, Configuration } from 'msal/lib-commonjs/Configuration';
import { BidListComponent } from './bid/bid-list/bid-list.component';
import { BidPagedListComponent } from './bid/bid-paged-list/bid-paged-list.component';
import { BidDetailsComponent } from './bid/bid-details/bid-details.component';
import { BidEditComponent } from './bid/bid-edit/bid-edit.component';
import { AlertModule } from 'src/common/alert/alert.module';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

export const protectedResourceMap: Map<string, Array<string>> = new Map(
  [
    [`${environment.apiUrl}/api/`, ['api://1838cc89-3e58-4edf-bc3d-6375c6df9cc4/api-access']]
  ]);

  // Protocol Support
export const authOptions: AuthOptions =  {
    clientId: '8b16e065-1a59-4f1c-a619-a50f918b9984',
    authority: 'https://login.microsoftonline.com/e3d53bb7-38c6-4c96-8a81-94089d81b8ff',
    redirectUri: environment.redirectUri,
    validateAuthority: true,
    postLogoutRedirectUri: environment.postLogoutRedirectUri,
    navigateToLoginRequestUrl: true,
};

export const cacheOptions: CacheOptions = {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: isIE
};

// Library support
// note: Telemetry is not yet instrumented, will be a part of future release
export const systemOptions: SystemOptions = {
//    logger?: Logger;
//    loadFrameTimeout?: number;
//    tokenRenewalOffsetSeconds?: number;
//    navigateFrameWait?: number;
//    telemetry?: TelemetryOptions
};

// Developer App Environment Support
export const frameworkOptions: FrameworkOptions = {
    isAngular: true,
//    unprotectedResources: Array<string>,
    protectedResourceMap,
};

// Configuration Object
export const config: Configuration = {
    auth: authOptions,
    cache: cacheOptions,
    system: systemOptions,
    framework: frameworkOptions
};

export const angularConfig: MsalAngularConfiguration = {
  popUp: isIE,
  extraQueryParameters: {},
  consentScopes: [
    'user.read',
    'api://1838cc89-3e58-4edf-bc3d-6375c6df9cc4/api-access'],
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientListComponent,
    ClientDetailComponent,
    ClientEditComponent,
    HomeComponent,
    JobDetailComponent,
    JobEditComponent,
    BidListComponent,
    BidPagedListComponent,
    BidDetailsComponent,
    BidEditComponent,
  ],
  imports: [
    NgbModule,
    MsalModule.forRoot(config, angularConfig),
    AlertModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
