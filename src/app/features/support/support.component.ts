import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm, NgModel} from "@angular/forms";
import {NotificationService} from "../../core/services/notification.service";
import {Support} from "../../model/support";

@Component({
  selector: 'ac-support',
  template: `
    <div class="container bg-light my-3 py-3 round-border">
      <div class="row">

        <h3 class="m-2 text-center">Fill and submit the form below if you need any help</h3>

        <form #f="ngForm" (ngSubmit)="onSubmit(f)" class="w-75 mx-auto my-2">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              ngModel #nameRef="ngModel" [ngClass]="checkField(nameRef, f)" type="text" class="form-control" id="name"
              name="name" minlength="3" maxlength="24" required
              aria-describedby="nameHelp"
            >
            <div id="nameHelp" class="form-text">Your name.</div>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input ngModel #emailRef="ngModel" [ngClass]="checkField(emailRef, f)" type="email" class="form-control"
                   id="email" name="email" required email
                   aria-describedby="emailHelp"
            >
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div class="mb-3">
            <label for="subject" class="form-label">Subject</label>
            <select ngModel #subjectRef="ngModel" [ngClass]="checkField(subjectRef, f)" id="subject" name="subject"
                    class="form-select" required aria-describedby="subjectHelp">
              <option value="order-info">Order info</option>
              <option value="product-support">Product support</option>
            </select>
            <div id="subjectHelp" class="form-text">The message subject.</div>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea ngModel #messageRef="ngModel" [ngClass]="checkField(messageRef, f)" class="form-control"
                      name="message" id="message" minlength="50" maxlength="1000" required
                      aria-describedby="messageHelp" cols="30"
                      rows="10"
            >
            </textarea>
            <div id="messageHelp" class="form-text">The content of your request.</div>
          </div>

          <div class="m-2 text-center">
            <button [disabled]="f.invalid" type="submit" class="btn btn-primary">Submit</button>
          </div>
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
  constructor(
    private http: HttpClient,
    public notificationService: NotificationService
  ) {
  }

  /**
   * The ngOnInit method.
   */
  ngOnInit(): void {
  }

  /**
   * Check the passed field and return
   *
   * @param input
   * @param form
   *
   * @return Object
   */
  checkField(input: NgModel, form: NgForm): Object {
    // TODO: In this way, as soon as we start typing, all the other inputs will be flagged as invalid.
    //  Maybe we should check each one individually when we start to fill the form??
    return {'is-invalid': input.invalid && form.dirty, 'is-valid': input.valid}
  }

  /**
   * Handle the form submission.
   *
   * @param form
   */
  onSubmit(form: NgForm) {
    this.http.post<Support>('http://localhost:3000/support', form.value)
      .subscribe({
        next: (v) => {
          this.notificationService.show('Your request has been submitted. We\'ll contact you ASAP.', 5)
          form.reset();
        },
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.post<Support>().')
      })
  }

}
