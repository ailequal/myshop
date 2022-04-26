import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';

import {BackofficeComponent} from './backoffice.component';
import {BackofficeHeroComponent} from "./components/backoffice-hero.component";
import {BackofficeNewsComponent} from "./components/backoffice-news.component";
import {BackofficeProductsComponent} from "./components/backoffice-products.component";

const routes: Routes = [
  {path: '', component: BackofficeComponent}
];

@NgModule({
  declarations: [
    BackofficeComponent,
    BackofficeHeroComponent,
    BackofficeNewsComponent,
    BackofficeProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule
  ]
})
export class BackofficeModule {
}
