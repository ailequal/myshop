import {Component} from '@angular/core';

@Component({
  selector: 'ac-root',
  template: `
    <ac-navbar (selectPage)="page = $event"></ac-navbar>

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
