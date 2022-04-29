import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Support} from "../../../../model/support";

@Component({
  selector: 'ac-support',
  template: `
    <div class="container bg-light my-3 py-3 round-border">
      <div class="row">

        <h3 class="m-2 text-center">All the received support requests</h3>

        <ul class="mx-auto my-4 w-75 list-group">
          <li class="w-100 list-group-item" *ngFor="let support of data; odd as odd"
              [ngClass]="{'bg-light': odd}">
            <div class="m-3 d-flex justify-content-around align-items-center display-6">
              <span>{{support.name}}</span> - <span>{{support.email}}</span> - <span>{{support.subject}}</span>
            </div>
            <p class="m-3">
              {{support.message}}
            </p>
          </li>
        </ul>

      </div>
    </div>
  `,
  styles: []
})
export class SupportComponent implements OnInit {

  data: Support[] = [];

  /**
   * The constructor method.
   */
  constructor(private http: HttpClient) {
  }

  /**
   * The ngOnInit method.
   */
  ngOnInit(): void {
    this.http.get<Support[]>('http://localhost:3000/support')
      .subscribe({
        next: (v) => this.data = v,
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.get<Support[]>().')
      });
  }

}
