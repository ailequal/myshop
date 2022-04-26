import {Component, OnInit} from '@angular/core';
import {SubPage} from "../../shared/model/page";

@Component({
  selector: 'ac-backoffice',
  template: `
    <ac-navbar-sub [pages]="pages"></ac-navbar-sub>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class BackofficeComponent implements OnInit {

  // TODO: These values should be probably stored somewhere else better...
  pages: SubPage[] = [
    {
      slug: '/backoffice/hero',
      title: 'Hero',
      sub: 'The hero section.'
    },
    {
      slug: '/backoffice/news',
      title: 'News',
      sub: 'The news section.'
    },
    {
      slug: '/backoffice/products',
      title: 'Products',
      sub: 'The products section.'
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
