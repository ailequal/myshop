import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import {ShopComponent} from './features/shop/shop.component';
import {CartComponent} from './features/cart/cart.component';
import {ShopHeroComponent} from './features/shop/components/shop-hero.component';
import {ShopItemCardComponent} from './features/shop/components/shop-item-card.component';
import {ShopItemNewsComponent} from './features/shop/components/shop-item-news.component';
import {ShopItemNewsletterComponent} from './features/shop/components/shop-item-newsletter.component';
import {PageNotFoundComponent} from './features/page-not-found/page-not-found.component';
import {ProductComponent} from './features/product/product.component';
import {BackofficeModule} from './features/backoffice/backoffice.module';

const routes: Routes = [
  {path: 'shop', component: ShopComponent, pathMatch: 'full'},
  {path: 'product/:id', component: ProductComponent, pathMatch: 'full'},
  {path: 'cart', component: CartComponent, pathMatch: 'full'},
  {
    path: 'backoffice',
    loadChildren: () => import('./features/backoffice/backoffice.module').then(m => m.BackofficeModule),
    pathMatch: 'full'
  },
  {path: 'page-not-found', component: PageNotFoundComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'shop', pathMatch: 'full'},
  {path: '**', redirectTo: 'page-not-found', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CartComponent,
    ShopHeroComponent,
    ShopItemCardComponent,
    ShopItemNewsComponent,
    ShopItemNewsletterComponent,
    PageNotFoundComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
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
