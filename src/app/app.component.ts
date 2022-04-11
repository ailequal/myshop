import {Component} from '@angular/core';

@Component({
  selector: 'ac-root',
  template: `
    <!--navigation-->
    <div class="navigation" style="display: flex; justify-content: center; align-content: center">
      <button (click)="page = 'shop'">SHOP</button>
      <button (click)="page = 'cart'">CART</button>
    </div>

    <!--if statement-->
    <!--    <ac-shop *ngIf="page === 'shop'"></ac-shop>-->
    <!--    <ac-cart *ngIf="page === 'cart'"></ac-cart>-->

    <!--switch case statement-->
    <ng-container [ngSwitch]="page">
      <ac-shop *ngSwitchCase="'shop'"></ac-shop>
      <ac-cart *ngSwitchCase="'cart'"></ac-cart>
      <h2 *ngSwitchDefault>I will never be printed.</h2>
    </ng-container>
  `,
  styles: []
})
export class AppComponent {

  page: 'cart' | 'shop' = 'cart';

  /**
   * The constructor method.
   */
  constructor() {
  }

}
