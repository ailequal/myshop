import {Component, OnInit} from '@angular/core';
import {Hero} from "../../../../model/hero";
import {HttpClient} from "@angular/common/http";
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'ac-hero',
  template: `
    <div class="container bg-light my-3 py-3 round-border">
      <div class="row">

        <!--hero edit-->
        <div class="col">
          <h2 class="text-center">EDIT HERO</h2>

          <form #f="ngForm" (ngSubmit)="saveHandler(f)">
            <input type="text" required minlength="6" class="form-control my-1" [ngModel]="data?.title"
                   name="title" placeholder="Title" #labelRef="ngModel" [ngClass]="checkField(labelRef, f)">

            <textarea class="form-control" required cols="30" [ngModel]="data?.description"
                      name="description" placeholder="Description" #descriptionRef="ngModel"
                      [ngClass]="checkField(descriptionRef, f)"></textarea>

            <input type="url" required class="form-control my-1" [ngModel]="data?.image" name="image"
                   placeholder="Full image URL" #imageRef="ngModel" pattern="https*:\\/\\/.+"
                   [ngClass]="checkField(imageRef, f)">

            <hr>

            <div class="btn-group">
              <button
                type="submit"
                class="btn btn-primary"
                [disabled]="f.invalid">
                SAVE
              </button>
            </div>
          </form>

          <h4 class="m-4 text-danger text-center">ALL FIELDS ARE MANDATORY!!</h4>
        </div>

      </div>
    </div>
    \`,
  `,
  styles: []
})
export class HeroComponent implements OnInit {

  // TODO: Add an image uploader. For now we will need to give an image URL inside the form.

  data: Hero | null = null;

  /**
   * The constructor method.
   */
  constructor(private http: HttpClient) {
  }

  /**
   * The ngOnInit method.
   */
  ngOnInit(): void {
    this.http.get<Hero>('http://localhost:3000/hero')
      .subscribe({
        next: (v) => this.data = v,
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.get<Hero>().')
      });
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
  saveHandler(form: NgForm): void {
    // For the http.patch() method setting the url with template literals is probably the best (and only) way to go.
    this.http.patch<Hero>(`http://localhost:3000/hero`, form.value)
      .subscribe({
        next: (v) => {
          this.data = v;
        },
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.patch<Hero>().')
      });
  }

}
