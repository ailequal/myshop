import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ac-support',
  template: `
    <div class="container bg-light my-3 py-3 round-border">
      <div class="row">

        <h3 class="m-2 text-center">Fill and submit the form below if you need any help</h3>

        <form class="m-2">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" aria-describedby="nameHelp">
            <div id="nameHelp" class="form-text">Your name.</div>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div class="mb-3">
            <label for="subject" class="form-label">Subject</label>
            <select id="subject" class="form-select" aria-describedby="subjectHelp">
              <option value="order-info">Order info</option>
              <option value="product-support">Product support</option>
            </select>
            <div id="subjectHelp" class="form-text">The message subject.</div>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" name="message" id="message" aria-describedby="messageHelp" cols="30"
                      rows="10"></textarea>
            <div id="messageHelp" class="form-text">The content of your request.</div>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

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
