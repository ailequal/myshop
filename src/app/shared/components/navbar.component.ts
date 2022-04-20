import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
    <div class="navigation" style="display: flex; justify-content: center; align-content: center">
      <button
        *ngFor="let page of pages"
        [routerLink]="'/' + page.slug"
        routerLinkActive="bg-success"
      >
        {{page.title | uppercase}}
        <!--        {{page.main}}-->
      </button>
    </div>
  `,
  styles: [],
})
export class NavbarMainComponent extends NavbarComponent<MainPage> {

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

@Component({
  selector: 'ac-navbar-sub',
  template: `
    <div class="navigation" style="display: flex; justify-content: center; align-content: center">
      <button
        *ngFor="let page of pages"
        (click)="selectPage.emit(page)"
        [ngClass]="{
        'bg-warning': page.slug === activePage.slug
        }"
      >
        {{page.title | uppercase}}
        <!--        {{page.sub}}-->
      </button>
    </div>
  `,
  styles: [],
})
export class NavbarSubComponent extends NavbarComponent<SubPage> {

  @Input() activePage!: SubPage;

  @Output() selectPage: EventEmitter<SubPage> = new EventEmitter<SubPage>();

  // TODO: Somehow, the sub navbar will need to handle the sub routes properly!!
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

    if (!this.activePage) {
      throw new Error('The activePage property must be passed into the "NavbarSubComponent".');
    }
  }

}
