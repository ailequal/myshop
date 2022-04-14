import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'ac-shop-item-newsletter',
  template: `
    <div class="bg-dark text-white mt-5">
      <div class="container py-5 text-center">
        <i class="fab fa-shopify fa-4x"></i>

        <h1 class="">Subscribe the newsletter</h1>

        <div>Subscribe our newsletter to get notified about news and updates</div>

        <div class="d-flex justify-content-center mt-2">
          <form class="row g-3" #f="ngForm" (ngSubmit)="send(f.value.email)">
            <div class="col-auto">
              <input
                required
                type="email"
                placeholder="Your email address"
                name="email"
                pattern="^[A-Za-z0-9](([_\\.\\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\\.\\-]?[a-zA-Z0-9]+)*)\\.([A-Za-z]{2,})$"
                class="form-control form-control-lg"
                #emailRef="ngModel"
                [ngModel]="subscribed"
                [readOnly]="subscribed"
                [ngClass]="{'is-invalid': emailRef.invalid && f.dirty, 'is-valid': emailRef.valid}"
              >
            </div>
            <div class="col-auto">
              <button
                type="submit" class="btn btn-lg btn-primary mb-3"
                [disabled]="subscribed || f.invalid"
              >Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ShopItemNewsletterComponent implements OnInit {

  subscribed: string | null = null;

  /**
   * The constructor method.
   */
  constructor(private http: HttpClient) {
  }

  /**
   * The ngOnInit method.
   */
  ngOnInit(): void {
    this.subscribed = localStorage.getItem('subscribed')
  }

  /**
   * Handles the newsletter form submission.
   *
   * @param email
   */
  send(email: string): void {
    // We simulate the newsletter subscription through a simple GET.
    // The db.json has a corresponding resource, that we will check.
    this.http.get<{ response: string }>(
      'http://localhost:3000/newsletter',
      {
        params: {
          email: email
        }
      })
      .subscribe({
        next: (v) => {
          if (v.response === 'ok') {
            this.subscribed = email
            localStorage.setItem('subscribed', email)
            alert('Subscribed successfully!!')
          }
        },
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.get<{ response: string }>().')
      });
  }

}
