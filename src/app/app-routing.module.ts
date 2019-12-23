import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';
import { MsalGuard } from 'src/msal-angular';
import { JobEditComponent } from './job/job-edit/job-edit.component';
import { JobDetailComponent } from './job/job-detail/job-detail.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'clients', component: ClientListComponent, canActivate: [MsalGuard]},
  {path: 'clients/details/:id', component: ClientDetailComponent, canActivate: [MsalGuard]},
  {path: 'clients/edit/:id', component: ClientEditComponent, canActivate: [MsalGuard]},
  {path: 'jobs/details/:id', component: JobDetailComponent, canActivate: [MsalGuard]},
  {path: 'jobs/edit/:id', component: JobEditComponent, canActivate: [MsalGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
