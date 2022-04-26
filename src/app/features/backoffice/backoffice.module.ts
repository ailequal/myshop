import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackofficeRoutingModule} from "./backoffice-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';

import {BackofficeComponent} from './backoffice.component';
import {BackofficeNewsComponent} from "./components/backoffice-news.component";
import {BackofficeProductsComponent} from "./components/backoffice-products.component";

@NgModule({
  declarations: [
    BackofficeComponent,
    BackofficeNewsComponent,
    BackofficeProductsComponent
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
