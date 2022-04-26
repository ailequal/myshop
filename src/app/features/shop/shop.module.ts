import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

import {ShopComponent} from "./shop.component";
import {ShopHeroComponent} from "./components/shop-hero.component";
import {ShopItemCardComponent} from "./components/shop-item-card.component";
import {ShopItemNewsComponent} from "./components/shop-item-news.component";
import {ShopItemNewsletterComponent} from "./components/shop-item-newsletter.component";

const routes: Routes = [
  {path: '', component: ShopComponent}
];

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
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule
  ],
  exports: [
    ShopComponent,
    ShopHeroComponent,
    ShopItemCardComponent,
    ShopItemNewsComponent,
    ShopItemNewsletterComponent
  ]
})
export class ShopModule {
}
