import {Component, Input, OnInit} from '@angular/core';
import {News} from "../../../shared/model/news";

@Component({
  selector: 'ac-shop-item-news',
  template: `
    <div class="card round-border ">
      <div class="card-body">
        <h5 class="card-title">{{news.title}}</h5>
        <p class="card-text">{{news.description}}</p>
        <a [href]="news.url" target="_blank" class="btn btn-dark round-border">
          <i class="fas fa-external-link-alt"></i>
          Visit
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class ShopItemNewsComponent implements OnInit {

  // We know for sure that this news will exist here, since we are using a loop
  // while calling this component which has N amount of valid news.
  @Input() news!: News;

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
