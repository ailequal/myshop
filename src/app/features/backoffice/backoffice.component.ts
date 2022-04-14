import {Component, OnInit} from '@angular/core';
import {SubPage} from "../../shared/model/page";

@Component({
  selector: 'ac-backoffice',
  template: `
    <ac-navbar-sub
      [activePage]="activePage"
      [pages]="pages"
      (selectPage)="setActivePage($event)"
    >
    </ac-navbar-sub>

    <ng-container [ngSwitch]="activePage.slug">
      <ac-backoffice-hero *ngSwitchCase="'hero'"></ac-backoffice-hero>
      <ac-backoffice-news *ngSwitchCase="'news'"></ac-backoffice-news>
      <ac-backoffice-products *ngSwitchCase="'products'"></ac-backoffice-products>
      <h2 *ngSwitchDefault>I will never be printed.</h2>
    </ng-container>
  `,
  styles: []
})
export class BackofficeComponent implements OnInit {

  // Define the active and also starting page.
  activePage: SubPage = {
    slug: 'hero',
    title: 'Hero',
    sub: 'The hero section.'
  };

  // TODO: These values should be probably stored somewhere else better...
  pages: SubPage[] = [
    {
      slug: 'hero',
      title: 'Hero',
      sub: 'The hero section.'
    },
    {
      slug: 'news',
      title: 'News',
      sub: 'The news section.'
    },
    {
      slug: 'products',
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

  /**
   * setActivePage()
   *
   * @param page
   */
  setActivePage(page: SubPage) {
    this.activePage = page;
  }

}
