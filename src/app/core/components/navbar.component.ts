import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ac-navbar',
  template: `
    <!--navigation-->
    <div class="navigation" style="display: flex; justify-content: center; align-content: center">
      <button (click)="selectPage.emit('shop')">SHOP</button>
      <button (click)="selectPage.emit('cart')">CART</button>
      <button (click)="selectPage.emit('backoffice')">BACKOFFICE</button>
    </div>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {

  @Input() pages: string[] = [];

  @Output() selectPage = new EventEmitter<'cart' | 'shop' | 'backoffice'>();

  /**
   * The constructor method.
   */
  constructor() {
  }

  /**
   * The ngOnInit method.
   */
  ngOnInit(): void {
    console.log(this.pages);
  }

}
