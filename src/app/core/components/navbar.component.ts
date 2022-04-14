import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ac-navbar',
  template: `
    <div class="navigation" style="display: flex; justify-content: center; align-content: center">
      <button *ngFor="let page of pages" (click)="selectPage.emit(page)">{{page | uppercase}}</button>
    </div>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  @Input() pages: string[] = [];

  @Output() selectPage = new EventEmitter<string>();

  /**
   * The constructor method.
   */
  constructor() {
  }

  /**
   * The ngOnInit method.
   */
  ngOnInit(): void {
    if (!this.pages || !this.pages.length)
      throw new Error('No pages data passed into the navbar component.');

    console.log(this.pages);
  }

}
