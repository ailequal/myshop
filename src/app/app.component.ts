import {Component} from '@angular/core';

@Component({
  selector: 'ac-root',
  template: `
    <ac-navbar [pages]="pages" (selectPage)="switchPage($event)"></ac-navbar>

    <ng-container [ngSwitch]="page">
      <ac-shop *ngSwitchCase="'shop'"></ac-shop>
      <ac-cart *ngSwitchCase="'cart'"></ac-cart>
      <ac-backoffice *ngSwitchCase="'backoffice'"></ac-backoffice>
    </ng-container>
  `,
  styles: []
})
export class AppComponent {

  page: 'cart' | 'shop' | 'backoffice' = 'backoffice';

  pages: string[] = ['cart', 'shop', 'backoffice'];

  /**
   * The constructor method.
   */
  constructor() {
  }

  /**
   * switchPage()
   *
   * @param page
   */
  switchPage(page: string) {
    // Cast the value from the custom event.
    // It's safe, since we know how the navbar component works.
    this.page = page as 'cart' | 'shop' | 'backoffice';
  }

}
