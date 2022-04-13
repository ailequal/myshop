import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../model/product';

@Component({
  selector: 'ac-backoffice',
  template: `
    <div class="container bg-light my-3 py-3 round-border">
      <div class="row">

        <!--product list-->
        <div class="col">
          <h2>
            <i class="fas fa-plus-circle"></i>
            Product List
          </h2>

          <ul class="list-group">
            <li
              class="list-group-item "
              *ngFor="let product of products"
            >
              <img [src]="product.image" height="50" class="mx-2">
              {{product.label}}
            </li>
          </ul>
        </div>

        <!--product edit-->
        <div class="col">
          <h2>
            Edit Product
          </h2>

          <form>
            <input type="text" required class="form-control my-1" minlength="3" placeholder="Product name">
            <textarea class="form-control" required cols="30" placeholder="description"></textarea>
            <input type="number" required class="form-control my-1" placeholder="Price">
            <input type="url" required class="form-control my-1" placeholder="Image url (es. http://www...)">
            <input type="number" required step="1" min="1" max="100" class="form-control my-1"
                   placeholder="Display Size (1-100)">
            <input type="number" required step="1" min="1" max="100000000" class="form-control my-1"
                   placeholder="Storage (in Mb)">
            <input type="number" required step="1" min="1" max="100000" class="form-control my-1"
                   placeholder="Memory(in Mb)">

            <div class="btn-group">
              <button type="submit" class="btn btn-primary">
                EDIT
              </button>
              <button type="button" class="btn btn-danger">Delete</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  `
})
export class BackofficeComponent implements OnInit {

  products: Product[] = [];

  selectedProduct: Product | null = null;

  /**
   * The constructor method.
   */
  constructor(private http: HttpClient) {
  }

  /**
   * The ngOnInit method.
   */
  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:3000/products')
      .subscribe({
        next: (v) => this.products = v,
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.get<Product[]>().')
      });
  }

}
