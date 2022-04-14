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

  @Input() activePage!: T;

  @Input() pages!: T[];

  @Output() selectPage: EventEmitter<T> = new EventEmitter<T>();

  /**
   * The ngOnInit method.
   */
  ngOnInit(): void {
    console.log('NavbarPageComponent');
  }

}

@Component({
  selector: 'ac-navbar-main',
  template: `
    <div class="navigation" style="display: flex; justify-content: center; align-content: center">
      <button
        *ngFor="let page of pages"
        (click)="selectPage.emit(page)"
        [ngClass]="{
        'bg-success': page.slug === activePage.slug
        }"
      >
        {{page.title | uppercase}}
        {{page.main}}
      </button>
    </div>
  `,
  styles: [],
})
export class NavbarMainComponent extends NavbarComponent<MainPage> {

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
    console.log('NavbarMainPageComponent');
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
        'bg-success': page.slug === activePage.slug
        }"
      >
        {{page.title | uppercase}}
        {{page.sub}}
      </button>
    </div>
  `,
  styles: [],
})
export class NavbarSubComponent extends NavbarComponent<SubPage> {

  /**
   * The constructor method.
   */
  constructor() {
    super();
  }

  // The sub-page component does not override this method.
  // /**
  //  * The ngOnInit method.
  //  */
  // override ngOnInit(): void {
  //   console.log('NavbarSubPageComponent');
  // }

}
