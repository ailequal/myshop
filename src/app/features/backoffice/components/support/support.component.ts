import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ac-support',
  template: `
    <div class="container bg-light my-3 py-3 round-border">
      <div class="row">

        <h3 class="m-2 text-center">All the received support requests</h3>

        <ul class="mx-auto my-4 w-75 list-group">
          <li class="w-100 list-group-item">
            <div class="m-3 d-flex justify-content-around align-items-center display-6">
              <span>Lucas</span> - <span>lucas@earth.org</span> - <span>Product support</span>
            </div>
            <p class="m-3">
              I guys, I cannot add a new product from the backoffice interface.
              I have tried multiple times without any luck. Could you help me?
            </p>
          </li>
        </ul>

      </div>
    </div>
  `,
  styles: []
})
export class SupportComponent implements OnInit {

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
