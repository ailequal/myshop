import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm, NgModel} from "@angular/forms";
import {Product} from '../../model/product';

@Component({
  selector: 'ac-backoffice',
  template: `
    <div class="container bg-light my-3 py-3 round-border">
      <div class="row">

        <!--product list-->
        <div class="col">
          <h2>
            <i class="fas fa-plus-circle" style="cursor: pointer;" (click)="selectedProduct = null"></i>
            Product List
          </h2>

          <ul class="list-group">
            <li
              class="list-group-item"
              style="cursor: pointer;"
              *ngFor="let product of products"
              [ngClass]="{'list-group-item-dark': product.id === selectedProduct?.id}"
              (click)="selectedProduct = product"
            >
              <img [src]="product.image" height="50" class="mx-2" alt="#">
              {{product.label}}
            </li>
          </ul>
        </div>

        <!--product edit-->
        <div class="col">
          <h2>{{selectedProduct ? 'EDIT PRODUCT' : 'ADD NEW PRODUCT'}}</h2>

          <form #f="ngForm" (ngSubmit)="saveHandler(f)">
            <input type="text" required minlength="3" class="form-control my-1" [ngModel]="selectedProduct?.label"
                   name="label" placeholder="Product name" #labelRef="ngModel" [ngClass]="checkField(labelRef, f)">
            <textarea class="form-control" required cols="30" [ngModel]="selectedProduct?.description"
                      name="description" placeholder="description"></textarea>
            <input type="number" required class="form-control my-1" [ngModel]="selectedProduct?.price" name="price"
                   placeholder="Price">
            <input type="url" required class="form-control my-1" [ngModel]="selectedProduct?.image" name="image"
                   placeholder="Image url (es. http://www...)">
            <input type="number" required step="1" min="1" max="100" class="form-control my-1"
                   [ngModel]="selectedProduct?.display" name="display" placeholder="Display Size (1-100)">
            <input type="number" required step="1" min="1" max="100000000" class="form-control my-1"
                   [ngModel]="selectedProduct?.storage" name="storage" placeholder="Storage (in MB)">
            <input type="number" required step="1" min="1" max="100000" class="form-control my-1"
                   [ngModel]="selectedProduct?.memory" name="memory" placeholder="Memory(in MB)">

            <div class="btn-group">
              <button type="submit" class="btn btn-primary" [disabled]="f.invalid">
                {{selectedProduct ? 'EDIT' : 'ADD'}}
              </button>
              <button
                type="button" class="btn btn-danger"
                *ngIf="selectedProduct" (click)="deleteHandler()">
                Delete
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  `
})
export class BackofficeComponent implements OnInit {

  // TODO: Add an image uploader. For now we will need to give an image URL inside the form.

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

  /**
   * Check the passed field and return
   *
   * @param input
   * @param form
   *
   * @return Object
   */
  checkField(input: NgModel, form: NgForm): Object {
    return {'is-invalid': input.invalid && form.dirty, 'is-valid': input.valid}
  }

  /**
   * Handle the form submission (it could be for adding or editing a product).
   *
   * @param form
   */
  saveHandler(form: NgForm): void {
    if (this.selectedProduct) {
      this.editHandler(form)
    } else {
      this.addHandler(form)
    }
  }

  /**
   * Add a new product from the relative form submission.
   *
   * @param form
   */
  addHandler(form: NgForm): void {
    this.http.post<Product>('http://localhost:3000/products', form.value)
      .subscribe({
        next: (v) => {
          this.products = [...this.products, v];
          form.reset();
        },
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.post<Product>().')
      })
  }

  /**
   * Edit an existing product from the relative form submission.
   *
   * @param form
   */
  editHandler(form: NgForm): void {
    if (!this.selectedProduct)
      return; // It should never be triggered in the first place without the selected product!!

    // For the http.patch() method setting the url with template literals is probably the best (and only) way to go.
    this.http.patch<Product>(`http://localhost:3000/products/${this.selectedProduct.id}`, form.value)
      .subscribe({
        next: (v) => {
          this.products = this.products.map(p => {
            return p.id === this.selectedProduct?.id ? v : p;
          })
        },
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.patch<Product>().')
      });
  }

  /**
   * Delete the currently selected product.
   */
  deleteHandler(): void {
    this.http.delete<Product>(`http://localhost:3000/products/${this.selectedProduct?.id}`)
      .subscribe({
        next: () => {
          this.products = this.products.filter(p => p.id !== this.selectedProduct?.id);
          this.selectedProduct = null;
        },
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.delete<Product>().')
      });
  }

}
