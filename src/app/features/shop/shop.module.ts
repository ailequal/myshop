import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ShopRoutingModule} from "./shop-routing.module";
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
    RouterModule,
    ShopRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ShopModule {
}
