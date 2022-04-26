import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'hero',
    loadChildren: () => import('./components/hero/hero.module').then(m => m.HeroModule),
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: () => import('./components/news/news.module').then(m => m.NewsModule),
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule),
    pathMatch: 'full'
  },
  {path: '', redirectTo: 'hero', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule {
}
