import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackofficeRoutingModule} from "./backoffice-routing.module";
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';

import {BackofficeComponent} from './backoffice.component';
import {BackofficeHeroComponent} from "./components/backoffice-hero.component";
import {BackofficeNewsComponent} from "./components/backoffice-news.component";
import {BackofficeProductsComponent} from "./components/backoffice-products.component";

@NgModule({
  declarations: [
    BackofficeComponent,
    BackofficeHeroComponent,
    BackofficeNewsComponent,
    BackofficeProductsComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class BackofficeModule {
}
