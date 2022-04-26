import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackofficeRoutingModule} from "./backoffice-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';

import {BackofficeComponent} from './backoffice.component';

@NgModule({
  declarations: [
    BackofficeComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ]
})
export class BackofficeModule {
}
