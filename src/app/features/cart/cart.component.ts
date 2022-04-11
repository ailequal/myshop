import {Component, OnInit} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'ac-cart',
  template: `
    <div class="cart container bg-light my-3 py-3 round-border">

      <div class="py-5 text-center">
        <i class="fab fa-shopify fa-4x"></i>
        <h2>Checkout form</h2>
        <p class="lead">Fill all fields and order now. Free shipping</p>
      </div>

      <!--MESSAGE PLACEHOLDER-->
      <div class="row g-5">
        <div class="col-md-5 col-lg-4 order-md-last">
          <!--CART SUMMARY PLACEHOLDER-->
          Cart Summary
        </div>

        <!--cart form-->
        <form #f="ngForm" (submit)="submitHandler(f.value)" class="col-md-7 col-lg-8">
          <h4 class="mb-3">Billing address</h4>

          <!--all the form inputs-->
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input id="firstName" type="text" class="form-control" required ngModel name="firstName"
                     #firstNameRef="ngModel"
                     [ngClass]="checkField(firstNameRef)"
              >
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input id="lastName" type="text" class="form-control" required ngModel name="lastName"
                     #lastNameRef="ngModel"
                     [ngClass]="checkField(lastNameRef)"
              >
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
              <input id="email" type="email" class="form-control" placeholder="you@example.com" ngModel name="email"
                     required email
                     #emailRef="ngModel" [ngClass]="checkField(emailRef)">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input id="address" type="text" class="form-control" placeholder="1234 Main St" required ngModel
                     name="address"
                     #addressRef="ngModel" [ngClass]="checkField(addressRef)">
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="col-md-5">
              <label for="country" class="form-label">Country</label>
              <select id="country" class="form-select" required ngModel name="country" #countryRef="ngModel"
                      [ngClass]="checkField(countryRef)">
                <option disabled [value]="null">Choose...</option>
                <option value="it">Italy</option>
                <option value="us">United States</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div class="col-md-3">
              <label for="zip" class="form-label">Zip</label>
              <input id="zip" type="text" class="form-control" required ngModel name="zip" minlength="4" maxlength="5"
                     #zipRef="ngModel" [ngClass]="checkField(zipRef)">
              <div class="invalid-feedback">
                Zip code required (4 or 5 chars)
              </div>
            </div>
          </div>

          <hr class="my-4">

          <!--payment options-->
          <h4 class="mb-3">Payment</h4>
          <div class="my-3">
            <div class="form-check">
              <input id="credit" type="radio" ngModel name="paymentMethod" value="creditCard" required
                     class="form-check-input">
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
            <div class="form-check">
              <input id="debit" type="radio" ngModel name="paymentMethod" value="bankTransfer" required
                     class="form-check-input">
              <label class="form-check-label" for="debit">Bank Transfer</label>
            </div>
          </div>

          <!--credit card-->
          <div class="row gy-3" *ngIf="f.value.paymentMethod === 'creditCard'">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input id="cc-name" type="text" class="form-control" required ngModel name="cardName"
                     #cardNameRef="ngModel"
                     [ngClass]="checkField(cardNameRef)">
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input id="cc-number" type="text" class="form-control" required minlength="16" maxlength="16" ngModel
                     name="cardNumber"
                     #cardNumberRef="ngModel" [ngClass]="checkField(cardNumberRef)">
              <div class="invalid-feedback">
                Credit card number is required (16 numbers)
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input id="cc-expiration" type="text" class="form-control" placeholder="12/22"
                     required pattern="^(0[1-9]|1[0-2])\\/?([0-9]{4}|[0-9]{2})$"
                     ngModel name="cardExpiration" #cardExpirationRef="ngModel"
                     [ngClass]="checkField(cardExpirationRef)">
              <div class="invalid-feedback">
                Expiration date required {{cardExpirationRef.errors | json}}
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input id="cc-cvv" type="text" class="form-control" required minlength="3" maxlength="3" ngModel
                     name="cardCVV"
                     #cardCVVRef="ngModel" [ngClass]="checkField(cardCVVRef)">
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr class="my-4">

          <button class="w-100 btn btn-primary btn-lg" type="submit" [disabled]="f.invalid">Confirm Order</button>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class CartComponent implements OnInit {

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

  /**
   * Check the passed field and return
   *
   * @param input
   *
   * @return Object
   */
  checkField(input: NgModel): Object {
    return {'is-invalid': input.invalid, 'is-valid': input.valid}
  }

  /**
   * Handles the cart form submission.
   *
   * @param formData
   */
  submitHandler(formData: any) {
    console.log(formData)
  }

}
