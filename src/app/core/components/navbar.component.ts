import {Component, Input, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {MainPage} from "../../model/page";

@Component({
  selector: 'ac-navbar',
  template: `
    <nav class="navbar navbar-light bg-light sticky-top shadow-lg">
      <div class="container-fluid">
        <a class="navbar-brand" [routerLink]="'/' + home.slug">
          <span [innerHTML]="home.label"></span>
        </a>

        <div class="d-flex">
          <button
            *ngFor="let page of pages"
            [routerLink]="'/' + page.slug"
            routerLinkActive="bg-success"
            class="btn btn-outline-dark mx-2"
          >
            <span [innerHTML]="page.label"></span>
          </button>

          <button
            [routerLink]="'/' + cart.slug"
            routerLinkActive="bg-success"
            class="btn btn-outline-dark mx-2"
          >
            <span [innerHTML]="cart.label"></span>
            <span>(€ {{cartService.getTotalCartAmount()}} - {{cartService.getTotalQty()}})</span>
          </button>
        </div>
      </div>
    </nav>

    <ac-notification></ac-notification>
  `,
  styles: [],
})
export class NavbarComponent implements OnInit {

  @Input() home!: MainPage;

  @Input() cart!: MainPage;

  @Input() pages!: MainPage[];

  // TODO: Usually the main navbar is always declared inside the core module, since it's used only once...
  //  This is a copy from "shared/navbar" that does the some stuff. Inside shared we have another reusable navbar.
  // TODO: Pass the active button style class as a property for the component.

  /**
   * The constructor method.
   */
  constructor(public cartService: CartService) {
  }

  /**
   * The ngOnInit method.
   */
  ngOnInit(): void {
    if (!this.home) {
      throw new Error('The home property must be passed into the "NavbarComponent".');
    }

    if (!this.cart) {
      throw new Error('The cart property must be passed into the "NavbarComponent".');
    }

    if (!this.pages) {
      throw new Error('The pages property must be passed into the "NavbarComponent".');
    }
  }

}
