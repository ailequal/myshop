import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {CartComponent} from './features/cart/cart.component';
import {PageNotFoundComponent} from './features/page-not-found/page-not-found.component';
import {ProductComponent} from './features/product/product.component';
import {BackofficeModule} from './features/backoffice/backoffice.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PageNotFoundComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    BackofficeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
