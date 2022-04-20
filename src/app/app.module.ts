import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { ShopComponent } from './features/shop/shop.component';
import { CartComponent } from './features/cart/cart.component';
import { BackofficeComponent } from './features/backoffice/backoffice.component';
import { BackofficeProductsComponent } from './features/backoffice/components/backoffice-products.component';
import { BackofficeNewsComponent } from './features/backoffice/components/backoffice-news.component';
import { BackofficeHeroComponent } from './features/backoffice/components/backoffice-hero.component';
import { ShopHeroComponent } from './features/shop/components/shop-hero.component';
import { ShopItemCardComponent } from './features/shop/components/shop-item-card.component';
import { ShopItemNewsComponent } from './features/shop/components/shop-item-news.component';
import { ShopItemNewsletterComponent } from './features/shop/components/shop-item-newsletter.component';
import { NavbarMainComponent, NavbarSubComponent } from './shared/components/navbar.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { ProductComponent } from './features/product/product.component';
import { ColorPickerComponent } from './shared/components/color-picker.component';

// Define all the routes for the module RouterModule.
const routes = [
  {path: 'shop', component: ShopComponent, pathMatch: 'full'},
  {path: 'product/:id', component: ProductComponent, pathMatch: 'full'},
  {path: 'cart', component: CartComponent, pathMatch: 'full'},
  {path: 'backoffice', component: BackofficeComponent, pathMatch: 'full'},
  {path: 'page-not-found', component: PageNotFoundComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'shop', pathMatch: 'full'},
  {path: '**', redirectTo: 'page-not-found', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CartComponent,
    BackofficeComponent,
    BackofficeProductsComponent,
    BackofficeNewsComponent,
    BackofficeHeroComponent,
    ShopHeroComponent,
    ShopItemCardComponent,
    ShopItemNewsComponent,
    ShopItemNewsletterComponent,
    NavbarMainComponent,
    NavbarSubComponent,
    PageNotFoundComponent,
    ProductComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
