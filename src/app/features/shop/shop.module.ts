import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopRoutingModule} from "./shop-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";

import {ShopComponent} from "./shop.component";
import {ShopHeroComponent} from "./components/shop-hero.component";
import {ShopItemCardComponent} from "./components/shop-item-card.component";
import {ShopItemNewsComponent} from "./components/shop-item-news.component";
import {ShopItemNewsletterComponent} from "./components/shop-item-newsletter.component";

@NgModule({
  declarations: [
    ShopComponent,
    ShopHeroComponent,
    ShopItemCardComponent,
    ShopItemNewsComponent,
    ShopItemNewsletterComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ]
})
export class ShopModule {
}
