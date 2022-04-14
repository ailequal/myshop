import {Component} from '@angular/core';

@Component({
  selector: 'ac-root',
  template: `
    <ac-navbar [pages]="pages" (selectPage)="page = $event"></ac-navbar>

    <ng-container [ngSwitch]="page">
      <ac-shop *ngSwitchCase="'shop'"></ac-shop>
      <ac-cart *ngSwitchCase="'cart'"></ac-cart>
      <ac-backoffice *ngSwitchCase="'backoffice'"></ac-backoffice>
    </ng-container>
  `,
  styles: []
})
export class AppComponent {

  page: 'cart' | 'shop' | 'backoffice' = 'backoffice'; // BUG
  // page: any = 'backoffice'; // OK...

  pages: string[] = ['cart', 'shop', 'backoffice'];

  /**
   * The constructor method.
   */
  constructor() {
  }

}
