import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ShopComponent } from './features/shop/components/shop.component';
import { CartComponent } from './features/cart/components/cart.component';
import { BackofficeComponent } from './features/backoffice/components/backoffice.component';
import { BackofficeProductsComponent } from './features/backoffice/components/backoffice-products.component';
import { BackofficeNewsComponent } from './features/backoffice/components/backoffice-news.component';
import { BackofficeHeroComponent } from './features/backoffice/components/backoffice-hero.component';
import { NavbarComponent } from './core/components/navbar.component';
import { ShopHeroComponent } from './features/shop/components/shop-hero.component';
import { ShopItemCardComponent } from './features/shop/components/shop-item-card.component';
import { ShopItemNewsComponent } from './features/shop/components/shop-item-news.component';
import { ShopItemNewsletterComponent } from './features/shop/components/shop-item-newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CartComponent,
    BackofficeComponent,
    BackofficeProductsComponent,
    BackofficeNewsComponent,
    BackofficeHeroComponent,
    NavbarComponent,
    ShopHeroComponent,
    ShopItemCardComponent,
    ShopItemNewsComponent,
    ShopItemNewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
