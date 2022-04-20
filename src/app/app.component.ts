import {Component, OnInit} from '@angular/core';
import {MainPage} from "./shared/model/page";

@Component({
  selector: 'ac-root',
  template: `
    <ac-navbar-main [pages]="pages"></ac-navbar-main>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {

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
   * The ngOnInit method.
   */
  ngOnInit(): void {
  }

}
