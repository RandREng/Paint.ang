import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../alert/alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from './alert.service';

@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    AlertComponent
  ],
  providers: [AlertService]
})

export class AlertModule {
  static forRoot() : ModuleWithProviders {
    return {
      ngModule: AlertModule,
      providers: [ AlertService]
    }
  }
}
