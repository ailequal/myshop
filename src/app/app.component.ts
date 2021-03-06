import {Component, OnInit} from '@angular/core';
import {Page} from "./core/model/page";

@Component({
  selector: 'ac-root',
  template: `
    <ac-navbar [home]="home" [pages]="pages"></ac-navbar>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  // TODO: These properties should be probably stored somewhere else better...
  home: Page = {
    slug: 'shop',
    title: 'Shop',
    label: '<i class="fab fa-shopify"></i> My Shop'
  };

  pages: Page[] = [
    {
      slug: 'backoffice',
      title: 'Backoffice',
      label: '<i class="fas fa-lock"></i> Admin'
    },
    {
      slug: 'cart',
      title: 'Cart',
      label: '<i class="fas fa-cart-plus"></i> Cart'
    },
  ];

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
