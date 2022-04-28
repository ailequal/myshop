import {Component, OnInit} from '@angular/core';
import {News} from "../../../../model/news";
import {HttpClient} from "@angular/common/http";
import {NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'ac-news',
  template: `
    <div class="container bg-light my-3 py-3 round-border">
      <div class="row">

        <!--news list-->
        <div class="col">
          <h2>
            <i class="fas fa-plus-circle" style="cursor: pointer;" (click)="selectedNews = null;"></i>
            News List
          </h2>

          <ul class="list-group">
            <li
              class="list-group-item"
              style="cursor: pointer;"
              *ngFor="let news of data"
              [ngClass]="{'list-group-item-dark': news.id === selectedNews?.id}"
              (click)="selectedNews = news;"
            >
              {{news.title}}
            </li>
          </ul>
        </div>

        <!--news edit-->
        <div class="col">
          <h2>{{selectedNews ? 'EDIT NEWS' : 'ADD NEW NEWS'}}</h2>

          <form #f="ngForm" (ngSubmit)="saveHandler(f)">
            <input type="text" required minlength="6" class="form-control my-1" [ngModel]="selectedNews?.title"
                   name="title" placeholder="News title" #titleRef="ngModel" [ngClass]="checkField(titleRef, f)">

            <textarea class="form-control" required cols="30" [ngModel]="selectedNews?.description"
                      name="description" placeholder="Description" #descriptionRef="ngModel"
                      [ngClass]="checkField(descriptionRef, f)"></textarea>

            <input type="url" required class="form-control my-1" [ngModel]="selectedNews?.url" name="url"
                   placeholder="News source URL" #urlRef="ngModel" pattern="https*:\/\/.+"
                   [ngClass]="checkField(urlRef, f)">

            <hr>

            <div class="btn-group">
              <button type="submit" class="btn btn-primary" [disabled]="f.invalid">
                {{selectedNews ? 'EDIT' : 'ADD'}}
              </button>

              <button
                type="button" class="btn btn-danger"
                *ngIf="selectedNews" (click)="deleteHandler()">
                Delete
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  `,
  styles: []
})
export class NewsComponent implements OnInit {

  data: News[] = [];

  selectedNews: News | null = null;

  /**
   * The constructor method.
   */
  constructor(private http: HttpClient) {
  }

  /**
   * The ngOnInit method.
   */
  ngOnInit(): void {
    this.http.get<News[]>('http://localhost:3000/news')
      .subscribe({
        next: (v) => this.data = v,
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.get<News[]>().')
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
   * Handle the form submission (it could be for adding or editing a news).
   *
   * @param form
   */
  saveHandler(form: NgForm): void {
    if (this.selectedNews) {
      this.editHandler(form)
    } else {
      this.addHandler(form)
    }
  }

  /**
   * Add new news from the relative form submission.
   *
   * @param form
   */
  addHandler(form: NgForm): void {
    this.http.post<News>('http://localhost:3000/news', form.value)
      .subscribe({
        next: (v) => {
          this.data = [...this.data, v];
          form.reset();
        },
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.post<News>().')
      })
  }

  /**
   * Edit existing news from the relative form submission.
   *
   * @param form
   */
  editHandler(form: NgForm): void {
    if (!this.selectedNews)
      return; // It should never be triggered in the first place without the selected news!!

    // For the http.patch() method setting the url with template literals is probably the best (and only) way to go.
    this.http.patch<News>(`http://localhost:3000/news/${this.selectedNews?.id}`, form.value)
      .subscribe({
        next: (v) => {
          this.data = this.data.map(n => {
            return n.id === this.selectedNews?.id ? v : n;
          })
        },
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.patch<News>().')
      });
  }

  /**
   * Delete the currently selected news.
   */
  deleteHandler(): void {
    this.http.delete<News>(`http://localhost:3000/news/${this.selectedNews?.id}`)
      .subscribe({
        next: () => {
          this.data = this.data.filter(n => n.id !== this.selectedNews?.id);
          this.selectedNews = null;
        },
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.delete<News>().')
      });
  }

}
