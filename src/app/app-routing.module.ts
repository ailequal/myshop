import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () => import('./features/shop/shop.module').then(m => m.ShopModule),
    pathMatch: 'full'
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule),
    pathMatch: 'full'
  },
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
  {
    path: 'page-not-found',
    loadChildren: () => import('./features/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
    pathMatch: 'full'
  },
  {path: '', redirectTo: 'shop', pathMatch: 'full'},
  {path: '**', redirectTo: 'page-not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
