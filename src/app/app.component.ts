import {Component} from '@angular/core';

@Component({
  selector: 'ac-root',
  template: `
    <!--navigation-->
    <div class="navigation" style="display: flex; justify-content: center; align-content: center">
      <button (click)="page = 'shop'">SHOP</button>
      <button (click)="page = 'cart'">CART</button>
      <button (click)="page = 'backoffice'">BACKOFFICE</button>
    </div>

    <!--if statement-->
    <!--    <ac-shop *ngIf="page === 'shop'"></ac-shop>-->
    <!--    <ac-cart *ngIf="page === 'cart'"></ac-cart>-->
    <!--    <ac-cart *ngIf="page === 'backoffice'"></ac-cart>-->

    <!--switch case statement-->
    <ng-container [ngSwitch]="page">
      <ac-shop *ngSwitchCase="'shop'"></ac-shop>
      <ac-cart *ngSwitchCase="'cart'"></ac-cart>
      <ac-backoffice *ngSwitchCase="'backoffice'"></ac-backoffice>
      <h2 *ngSwitchDefault>I will never be printed.</h2>
    </ng-container>
  `,
  styles: []
})
export class AppComponent {

  page: 'cart' | 'shop' | 'backoffice' = 'backoffice';

  /**
   * The constructor method.
   */
  constructor() {
  }

}
