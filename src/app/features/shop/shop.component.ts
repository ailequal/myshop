import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CartService} from '../../core/services/cart.service';
import {Hero} from "../../model/hero";
import {News} from "../../model/news";
import {Product} from "../../model/product";

@Component({
  selector: 'ac-shop',
  template: `
    <!--main container-->
    <div class="shop container">

      <ac-shop-hero [data]="hero"></ac-shop-hero>

      <!--cards container-->
      <div class="row row-cols-1 row-cols-lg-2  row-cols-xl-3 mt-5">
        <!--cards loop-->
        <div class="col mb-3" *ngFor="let product of products">
          <ac-shop-item-card
            [product]="product"
            (addToCart)="addToCartHandler($event)"
          >
          </ac-shop-item-card>
        </div>
      </div>

      <!--news container-->
      <div class="row 3 mt-5">
        <!--news loop-->
        <div class="col-sm-6" *ngFor="let n of news">
          <ac-shop-item-news [news]="n"></ac-shop-item-news>
        </div>
      </div>

      <ac-shop-item-newsletter></ac-shop-item-newsletter>

    </div>
  `,
  styles: []
})
export class ShopComponent implements OnInit {

  hero: Hero | null = null;

  products: Product[] = [];

  news: News[] = [];

  /**
   * The constructor method.
   * The HttpClient instance is injected.
   */
  constructor(
    private http: HttpClient,
    public cartService: CartService
  ) {
  }

  /**
   * The ngOnInit method.
   */
  ngOnInit(): void {
    this.http.get<Hero>('http://localhost:3000/hero')
      .subscribe({
        next: (v) => this.hero = v,
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.get<Hero>().')
      });

    this.http.get<Product[]>('http://localhost:3000/products')
      .subscribe({
        next: (v) => this.products = v,
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.get<Product[]>().')
      });

    this.http.get<News[]>('http://localhost:3000/news')
      .subscribe({
        next: (v) => this.news = v,
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.get<News[]>().')
      });
  }

  /**
   * Add the passed product and its color to the cart.
   *
   * @param params
   */
  addToCartHandler(params: { product: Product; color: string | null }): void {
    this.cartService.addItem(params.product, params.color);
  }

}
