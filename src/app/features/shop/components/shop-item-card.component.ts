import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../shared/model/product";

@Component({
  selector: 'ac-shop-item-card',
  template: `
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
            (click)="addToCart.emit({ product: product, color: selectedColor })"
          >
            <i class="fas fa-cart-plus text-white"></i>
          </button>
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
export class ShopItemCardComponent implements OnInit {

  // We know for sure that this product will exist here, since we are using a loop
  // while calling this component which has N amount of valid products.
  @Input() product!: Product;

  @Output() addToCart = new EventEmitter<{ product: Product, color: string | null }>();

  selectedColor: string | null = null;

  /**
   * The constructor method.
   */
  constructor() {
  }

  /**
   * The ngOnInit method.
   */
  ngOnInit(): void {
  }

}
