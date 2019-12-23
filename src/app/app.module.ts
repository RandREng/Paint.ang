import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalModule, MsalInterceptor } from '../msal-angular';

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

export const protectedResourceMap: Map<string, Array<string>> = new Map(
  [
    [`${environment.apiUrl}/api/`, ['api://1838cc89-3e58-4edf-bc3d-6375c6df9cc4/api-access']]
  ]);

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
  ],
  imports: [
    MsalModule.forRoot({
      auth: {
        clientId: '8b16e065-1a59-4f1c-a619-a50f918b9984',
        authority: 'https://login.microsoftonline.com/e3d53bb7-38c6-4c96-8a81-94089d81b8ff',
        redirectUri: environment.redirectUri
      },
      framework: {
        protectedResourceMap
      }
    }
      ,
      {
        consentScopes: [
          'user.read',
          'api://1838cc89-3e58-4edf-bc3d-6375c6df9cc4/api-access'],
      }),

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
