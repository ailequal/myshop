import {Component, OnInit} from '@angular/core';
import {MainPage} from "./shared/model/page";

@Component({
  selector: 'ac-root',
  template: `
    <ac-navbar-main [home]="home" [pages]="pages"></ac-navbar-main>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  // TODO: These properties should be probably stored somewhere else better...
  home: MainPage = {
    slug: 'shop',
    title: 'Shop',
    main: '<i class="fab fa-shopify"></i> My Shop'
  };

  pages: MainPage[] = [
    {
      slug: 'backoffice',
      title: 'Backoffice',
      main: '<i class="fas fa-lock"></i> Admin'
    },
    {
      slug: 'cart',
      title: 'Cart',
      main: '<i class="fas fa-cart-plus"></i> Cart'
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
