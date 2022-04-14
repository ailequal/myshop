import {Component} from '@angular/core';
import {MainPage, SubPage} from "./core/model/page";

@Component({
  selector: 'ac-root',
  template: `
    <ac-navbar-main
      [activePage]="activePage"
      [pages]="pages"
      (selectPage)="setActivePage($event)"
    >
    </ac-navbar-main>

    <ng-container [ngSwitch]="activePage.slug">
      <ac-shop *ngSwitchCase="'shop'"></ac-shop>
      <ac-cart *ngSwitchCase="'cart'"></ac-cart>
      <ac-backoffice *ngSwitchCase="'backoffice'"></ac-backoffice>
    </ng-container>
  `,
  styles: []
})
export class AppComponent {

  // Define the active and also starting page.
  activePage: MainPage = {
    slug: 'backoffice',
    title: 'Backoffice',
    main: 'The backoffice section.'
  };

  // TODO: These values should be probably stored somewhere else better...
  pages: MainPage[] = [
    {
      slug: 'shop',
      title: 'Shop',
      main: 'The shop section.'
    },
    {
      slug: 'cart',
      title: 'Cart',
      main: 'The cart section.'
    },
    {
      slug: 'backoffice',
      title: 'Backoffice',
      main: 'The backoffice section.'
    }
  ];

  /**
   * The constructor method.
   */
  constructor() {
  }

  /**
   * setActivePage()
   *
   * @param page
   */
  setActivePage(page: MainPage) {
    this.activePage = page;
  }

}
