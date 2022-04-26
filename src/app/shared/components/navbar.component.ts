import {Component, Input, OnInit} from '@angular/core';
import {MainPage, Page, SubPage} from "../model/page";

// Unfortunately, there is no way in Angular to create an instance of a generic component.
// To get around this limitation, we need to create a non-generic component for each derived type we want to use it with.
// Declare an abstract class as blueprint.
// Attach a decorator, since we are already defining some Angular specific features.
// @link https://www.damirscorner.com/blog/posts/20211210-GenericBaseComponentsInAngular.html
@Component({
  template: "",
})
export abstract class NavbarComponent<T extends Page> implements OnInit {

  @Input() pages!: T[];

  /**
   * The constructor method.
   */
  protected constructor() {
  }

  /**
   * The ngOnInit method.
   */
  ngOnInit(): void {
    if (!this.pages) {
      throw new Error('The pages property must be passed into the "NavbarComponent".');
    }
  }

}

@Component({
  selector: 'ac-navbar-main',
  template: `
    <nav class="navbar navbar-light bg-light sticky-top shadow-lg">
      <div class="container-fluid">
        <a class="navbar-brand" [routerLink]="'/' + home.slug">
          <span [innerHTML]="home.main"></span>
        </a>

        <div class="d-flex">
          <button
            *ngFor="let page of pages"
            [routerLink]="'/' + page.slug"
            routerLinkActive="bg-success"
            class="btn btn-outline-dark mx-2"
          >
            <span [innerHTML]="page.main"></span>
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarMainComponent extends NavbarComponent<MainPage> {

  @Input() home!: MainPage;

  // TODO: Usually the main navbar is always declared inside the core module, since it's used only once...
  // TODO: Pass the active button style class as a property for the component.

  /**
   * The constructor method.
   */
  constructor() {
    super();
  }

  /**
   * The ngOnInit method.
   */
  override ngOnInit(): void {
    super.ngOnInit();

    if (!this.home) {
      throw new Error('The home property must be passed into the "NavbarMainComponent".');
    }
  }

}

@Component({
  selector: 'ac-navbar-sub',
  template: `
    <div class="navigation m-3" style="display: flex; justify-content: center; align-content: center">
      <button
        *ngFor="let page of pages"
        [routerLink]="'/' + page.slug"
        routerLinkActive="bg-warning"
      >
        {{page.title | uppercase}}
        <!--        {{page.sub}}-->
      </button>
    </div>
  `,
  styles: [],
})
export class NavbarSubComponent extends NavbarComponent<SubPage> {

  // TODO: Pass the active button style class as a property for the component.

  /**
   * The constructor method.
   */
  constructor() {
    super();
  }

  /**
   * The ngOnInit method.
   */
  override ngOnInit(): void {
    super.ngOnInit();
  }

}
