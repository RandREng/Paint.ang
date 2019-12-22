import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { HomeComponent } from './home/home.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { ClientEditComponent } from './client/client-edit/client-edit.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'clients', component: ClientListComponent},
  {path: 'clients/details/:id', component: ClientDetailComponent},
  {path: 'clients/edit/:id', component: ClientEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
