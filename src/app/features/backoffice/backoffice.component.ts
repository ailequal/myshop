import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ac-backoffice',
  template: `
    <!--navigation-->
    <div class="navigation" style="display: flex; justify-content: center; align-content: center">
      <button (click)="page = 'hero'">HERO</button>
      <button (click)="page = 'news'">NEWS</button>
      <button (click)="page = 'products'">PRODUCTS</button>
    </div>

    <!--switch case statement-->
    <ng-container [ngSwitch]="page">
      <ac-backoffice-hero *ngSwitchCase="'hero'"></ac-backoffice-hero>
      <ac-backoffice-news *ngSwitchCase="'news'"></ac-backoffice-news>
      <ac-backoffice-products *ngSwitchCase="'products'"></ac-backoffice-products>
      <h2 *ngSwitchDefault>I will never be printed.</h2>
    </ng-container>
  `,
  styles: []
})
export class BackofficeComponent implements OnInit {

  page: 'hero' | 'news' | 'products' = 'hero';

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
