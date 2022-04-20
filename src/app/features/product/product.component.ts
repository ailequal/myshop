import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ac-product',
  template: `
    <p>
      product works!
    </p>
  `,
  styles: []
})
export class ProductComponent implements OnInit {

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
