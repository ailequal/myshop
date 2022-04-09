import {Component} from '@angular/core';
import {Product} from "./model/product";
import {News} from "./model/news";

@Component({
  selector: 'ac-root',
  template: `
    <!--main container-->
    <div class="container mx-auto p-4 row">

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

    </div>
  `,
  styles: [`
    .card img:hover {
      -webkit-box-shadow: 0px 0px 100px 0px rgb(186, 186, 186);
      -moz-box-shadow: 0px 0px 100px 0px rgb(186, 186, 186);
      box-shadow: 0px 0px 100px 0px rgb(186, 186, 186);
    }
  `]
})
export class AppComponent {

  products: Product[] = [
    {
      "id": 1,
      "label": "myMac",
      "description": "Inspired by the best of Apple. Transformed by the M1 chip. Stands out in any space. Fits perfectly into your life.",
      "image": "https://res.cloudinary.com/my-notes-demo/image/upload/v1627760417/academy/imac.png",
      "memory": 16000,
      "storage": 2000000,
      "display": 24,
      "price": 1500,
      "colors": [
        "mediumpurple", "red", "yellow", "aquamarine", "deepskyblue"
      ]
    },
    {
      "id": 3,
      "label": "myPad Pro",
      "description": "Now with breakthrough M1 performance, a breathtaking XDR display, and blazing‑fast 5G wireless.",
      "image": "https://res.cloudinary.com/my-notes-demo/image/upload/v1627760421/academy/ipad.png",
      "memory": 4000,
      "storage": 64000,
      "display": 6.1,
      "price": 900,
      "colors": [
        "dimgray", "darkgray"
      ]

    },
    {
      "id": 4,
      "label": "myPhone 13",
      "description": "5G speed. A14 Bionic, the fastest chip in a smartphone.\nAn edge-to-edge OLED display. Ceramic Shield with four times better drop performance. And Night mode on every camera. iPhone 12 has it all — in two perfect sizes.",
      "image": "https://res.cloudinary.com/my-notes-demo/image/upload/v1627760465/academy/iphone12.jpg",
      "memory": 16000,
      "storage": 256000,
      "display": 12.9,
      "price": 850,
      "colors": [
        "black", "red", "lightgreen", "midnightblue", "mediumpurple"
      ]

    }
  ];

  news: News[] = [
    {
      "id": 1,
      "title": "myWatch Series 6",
      "description": "Measure your blood oxygen level with a revolutionary sensor and app. Take an ECG anytime, anywhere. See your fitness metrics at a glance with the enhanced Always-On Retina display. ",
      "url": "https://www.apple.com/it/apple-watch-series-6/"
    },
    {
      "id": 2,
      "title": "myTV 4K",
      "description": "The new Apple TV 4K brings the best of TV together with your favorite Apple devices and services — in a powerful experience that will transform your living room.",
      "url": "https://www.apple.com/apple-tv-4k/"
    }
  ];

  // TODO: The selected color is the same for all the available products.
  //  This bug will be fixed later on. Ignore it for now.
  selectedColor: string | null = null;

  /**
   * The constructor method.
   */
  constructor() {
    console.log(this.products)
  }

  /**
   * Add the passed product and its color to the cart.
   *
   * @param params
   */
  addToCartHandler(params: { product: Product; color: string | null }): void {
    console.log(params.product, params.color)
  }

}
