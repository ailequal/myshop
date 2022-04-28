import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ac-notification',
  template: `
    <p>
      notification works!
    </p>
  `,
  styles: []
})
export class NotificationComponent implements OnInit {

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
