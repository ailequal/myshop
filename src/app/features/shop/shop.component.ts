import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hero} from "../../shared/model/hero";
import {News} from "../../shared/model/news";
import {Product} from "../../shared/model/product";

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
          <ac-shop-item-news
            [news]="n"
          ></ac-shop-item-news>
        </div>
      </div>

      <!--newsletter-->
      <div class="bg-dark text-white mt-5">
        <div class="container py-5 text-center">
          <i class="fab fa-shopify fa-4x"></i>

          <h1 class="">Subscribe the newsletter</h1>

          <div>Subscribe our newsletter to get notified about news and updates</div>

          <div class="d-flex justify-content-center mt-2">
            <form class="row g-3" #f="ngForm" (ngSubmit)="send(f.value.email)">
              <div class="col-auto">
                <input
                  required
                  type="email"
                  placeholder="Your email address"
                  name="email"
                  pattern="^[A-Za-z0-9](([_\\.\\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\\.\\-]?[a-zA-Z0-9]+)*)\\.([A-Za-z]{2,})$"
                  class="form-control form-control-lg"
                  #emailRef="ngModel"
                  [ngModel]="subscribed"
                  [readOnly]="subscribed"
                  [ngClass]="{'is-invalid': emailRef.invalid && f.dirty, 'is-valid': emailRef.valid}"
                >
              </div>
              <div class="col-auto">
                <button
                  type="submit" class="btn btn-lg btn-primary mb-3"
                  [disabled]="subscribed || f.invalid"
                >Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  `,
  styles: []
})
export class ShopComponent implements OnInit {

  hero: Hero | null = null;

  products: Product[] = [];

  news: News[] = [];

  subscribed: string | null = null;

  /**
   * The constructor method.
   * The HttpClient instance is injected.
   */
  constructor(private http: HttpClient) {
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

    this.subscribed = localStorage.getItem('subscribed')
  }

  /**
   * Add the passed product and its color to the cart.
   *
   * @param params
   */
  addToCartHandler(params: { product: Product; color: string | null }): void {
    console.log(params.product, params.color)
  }

  /**
   * Handles the newsletter form submission.
   *
   * @param email
   */
  send(email: string): void {
    // We simulate the newsletter subscription through a simple GET.
    // The db.json has a corresponding resource, that we will check.
    this.http.get<{ response: string }>(
      'http://localhost:3000/newsletter',
      {
        params: {
          email: email
        }
      })
      .subscribe({
        next: (v) => {
          if (v.response === 'ok') {
            this.subscribed = email
            localStorage.setItem('subscribed', email)
            alert('Subscribed successfully!!')
          }
        },
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.get<{ response: string }>().')
      });
  }

}
