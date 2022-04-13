import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Hero} from "../../model/hero";
import {News} from "../../model/news";
import {Product} from "../../model/product";

@Component({
  selector: 'ac-shop',
  template: `
    <!--main container-->
    <div class="shop container">

      <!--hero-->
      <div class="card round-border overflow-hidden mt-3" style="height: 300px">
        <img
          class="card-img round-border"
          style="object-fit: cover"
          [src]="hero?.image" alt="Hero"
        >
        <div class="card-img-overlay mt-5">
          <h1 class="card-title">{{hero?.title}}</h1>
          <h4 class="card-text" [innerHTML]="hero?.description"></h4>
        </div>
      </div>

      <!--cards container-->
      <div class="row row-cols-1 row-cols-lg-2  row-cols-xl-3 mt-5">
        <!--cards loop-->
        <div class="col" *ngFor="let product of products">
          <!--card-->
          <div class="card h-100 round-border shadow-lg">
            <!--image-->
            <div class="position-relative">
              <img
                class="card-img-top p-3 round-border "
                [src]="product.image" [alt]="product.label"
                role="button"
              >
              <div class="position-absolute top-50 start-50 w-75 translate-middle pe-none">
                <div class="row  row-cols-3 g-2 rounded p-2 text-white" style="background: rgba(0,0,0,0.5)">
                  <div class="col text-center">
                    <i class="fas fa-memory"></i>
                    {{product.memory / 1000 }}
                  </div>

                  <div class="col text-center">
                    <i class="fas fa-sim-card"></i>
                    {{product.storage / 1000}}
                  </div>
                  <div class="col text-center">
                    <i class="fas fa-mobile-alt"></i>
                    {{product.display}}''
                  </div>
                </div>
              </div>
            </div>

            <!--title and description-->
            <div class="card-body text-center">
              <h5 class="card-title">
                {{product.label}}
              </h5>
              <p class="card-text text-secondary">{{product.description}}</p>
            </div>

            <!--colors-->
            <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center">
              <div
                class="mx-1 mb-3 round-border shadow-sm"
                style="width: 30px; height: 30px; border: 1px solid #fff"
                role="button"
                *ngFor="let color of product.colors"
                (click)="selectedColor = color"
                [style.backgroundColor]="color"
                [style.border-width.px]="selectedColor === color ? 5 : 1"
                [style.border-color]="selectedColor === color ? 'orange' : '#ccc'"
              ></div>
            </div>

            <!--footer-->
            <div class="card-footer d-flex justify-content-between align-items-center">
              <div class="h5 text-secondary">{{product.price | currency: '€'}} + vat</div>

              <div>
                <span>select color</span>

                <button
                  class="btn icon-circle-sm px-1 ms-2 shadow-lg"
                  style="color: #bbb"
                  [style.background-color]="selectedColor  || '#ccc'"
                  [disabled]="!selectedColor"
                  (click)="addToCartHandler({ product: product, color: selectedColor })"
                >
                  <i class="fas fa-cart-plus text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--news container-->
      <div class="row 3 mt-5">
        <!--news loop-->
        <div class="col-sm-6" *ngFor="let n of news">
          <!--news-->
          <div class="card round-border ">
            <div class="card-body">
              <h5 class="card-title">{{n.title}}</h5>
              <p class="card-text">{{n.description}}</p>
              <a [href]="n.url" target="_blank" class="btn btn-dark round-border">
                <i class="fas fa-external-link-alt"></i>
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--newsletter-->
      <div class="bg-dark text-white mt-5">
        <div class="container py-5 text-center">
          <i class="fab fa-shopify fa-4x"></i>

          <h1 class="">Subscribe the newsletter</h1>

          <div>Subscribe our newsletter to get notified about news and updates</div>

          <div class="d-flex justify-content-center mt-2">
            <div *ngIf="subscribed">{{subscribed}} is already subscribed to our newsletter.</div>

            <form *ngIf="!subscribed" class="row g-3" #f="ngForm" (ngSubmit)="send(f.value.email)">
              <div class="col-auto">
                <input
                  type="email" class="form-control form-control-lg" placeholder="Your email address"
                  ngModel name="email" required #emailRef="ngModel"
                  pattern="^[A-Za-z0-9](([_\\.\\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\\.\\-]?[a-zA-Z0-9]+)*)\\.([A-Za-z]{2,})$"
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
  styles: [`
    .card img:hover {
      -webkit-box-shadow: 0 0 100px 0 rgb(186, 186, 186);
      -moz-box-shadow: 0 0 100px 0 rgb(186, 186, 186);
      box-shadow: 0 0 100px 0 rgb(186, 186, 186);
    }
  `]
})
export class ShopComponent implements OnInit {

  hero: Hero | null = null;

  products: Product[] = [];

  news: News[] = [];

  subscribed: string | null = null;

  // TODO: The selected color is the same for all the available products.
  //  This bug will be fixed later on. Ignore it for now.
  selectedColor: string | null = null;

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
        complete: () => console.log('Completed http.get<{ response: string }>[]>().')
      });
  }

}
