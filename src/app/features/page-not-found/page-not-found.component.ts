import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ac-page-not-found',
  template: `
    <h1>404</h1>

    <a routerLink="/shop">Shop</a>
  `,
  styles: []
})
export class PageNotFoundComponent implements OnInit {

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
