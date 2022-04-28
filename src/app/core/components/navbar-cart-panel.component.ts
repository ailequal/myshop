import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";

@Component({
  selector: 'ac-navbar-cart-panel',
  template: `
    <div class="position-relative">
      <div class="position-fixed end-0 m-2 " style="z-index: 10; top: 60px">
        <div class="overflow-scroll bg-white p-3 rounded-3 shadow-lg " style="width: 350px; height: 340px;">

          <!--no product message-->
          <div *ngIf="!cartService.getTotalQty()" class="text-center">
            There are no products in your cart.
          </div>

          <!--cart items-->
          <div
            *ngFor="let item of cartService.items"
            class="d-flex justify-content-between align-items-center border-bottom p-2 pe-none"
          >
            <div class="d-flex ">
              <div>
                <img
                  class="round-border me-2"
                  width="70"
                  [src]="item.product.image" alt="..."
                >
              </div>

              <div style=" width: 130px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden ">
                {{item.product.label}}
                <div class="text-secondary">Qty: {{item.quantity}}</div>
                <div class="text-secondary">Color: {{item.color}}</div>
              </div>
            </div>
            <div>€ {{item.quantity * item.product.price}}</div>
          </div>

          <div class="d-flex justify-content-center mt-2">
            <button
              *ngIf="cartService.getTotalQty()"
              routerLink="/cart"
              class="btn btn-dark rounded-3"
            >
              Order Now
            </button>
          </div>

        </div>
      </div>
    </div>
  `,
  styles: []
})
export class NavbarCartPanelComponent implements OnInit {

  /**
   * The constructor method.
   */
  constructor(public cartService: CartService) {
  }

  /**
   * The ngOnInit method.
   */
  ngOnInit(): void {
  }

}
