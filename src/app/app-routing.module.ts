import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProductComponent} from "./features/product/product.component";
import {PageNotFoundComponent} from "./features/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () => import('./features/shop/shop.module').then(m => m.ShopModule),
    pathMatch: 'full'
  },
  {path: 'product/:id', component: ProductComponent, pathMatch: 'full'},
  {
    path: 'cart',
    loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule),
    pathMatch: 'full'
  },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
