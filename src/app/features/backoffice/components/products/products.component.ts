import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm, NgModel} from "@angular/forms";
import {Product} from '../../../../model/product';

@Component({
  selector: 'ac-products',
  template: `
    <div class="container bg-light my-3 py-3 round-border">
      <div class="row">

        <!--product list-->
        <div class="col">
          <h2>
            <i class="fas fa-plus-circle" style="cursor: pointer;" (click)="selectedProduct = null; colors = []"></i>
            Product List
          </h2>

          <ul class="list-group">
            <li
              class="list-group-item"
              style="cursor: pointer;"
              *ngFor="let product of products"
              [ngClass]="{'list-group-item-dark': product.id === selectedProduct?.id}"
              (click)="selectedProduct = product; colors = product.colors"
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
                      name="description" placeholder="Description" #descriptionRef="ngModel"
                      [ngClass]="checkField(descriptionRef, f)"></textarea>

            <input type="number" required class="form-control my-1" [ngModel]="selectedProduct?.price" name="price"
                   placeholder="Price" #priceRef="ngModel" [ngClass]="checkField(priceRef, f)">

            <input type="url" required class="form-control my-1" [ngModel]="selectedProduct?.image" name="image"
                   placeholder="Full image URL" #imageRef="ngModel" pattern="https*:\/\/.+"
                   [ngClass]="checkField(imageRef, f)">

            <input type="number" required step="1" min="1" max="100" class="form-control my-1"
                   [ngModel]="selectedProduct?.display" name="display" placeholder="Display size (1-100)"
                   #displayRef="ngModel" [ngClass]="checkField(displayRef, f)">

            <input type="number" required step="1" min="1" max="100000000" class="form-control my-1"
                   [ngModel]="selectedProduct?.storage" name="storage" placeholder="Storage (MB)"
                   #storageRef="ngModel"
                   [ngClass]="checkField(storageRef, f)">

            <input type="number" required step="1" min="1" max="100000" class="form-control my-1"
                   [ngModel]="selectedProduct?.memory" name="memory" placeholder="Memory (MB)" #memoryRef="ngModel"
                   [ngClass]="checkField(memoryRef, f)">

            <!--color picker-->
            <div class="d-flex align-items-center gap-2 mb-3">
              <input type="color" #colorInput>
              <!--TODO: The color value itself acts as ID, if the exact same color is added twice...-->
              <i class="fas fa-plus-circle" (click)="colors.push(colorInput.value);"></i>
            </div>

            <!--color list-->
            <div class="d-flex gap-3 ">
              <div
                *ngFor="let color of colors; let i = index"
                class="position-relative"
                [style.background]="color"
                style="width: 80px; height: 40px; "
              >
                <button type="button"
                        class="btn position-absolute top-100 start-50 translate-middle badge rounded-pill bg-danger">
                  <i class="fas fa-trash text-white" (click)="removeColor(color)"></i>
                </button>
              </div>
            </div>

            <hr>

            <div class="btn-group">
              <button type="submit" class="btn btn-primary" [disabled]="f.invalid || !colors.length">
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
  `,
  styles: []
})
export class ProductsComponent implements OnInit {

  // TODO: Add an image uploader. For now we will need to give an image URL inside the form.

  products: Product[] = [];

  colors: string[] = []; // TODO: Colors are handled badly (for now only)!!

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
    // TODO: In this way, as soon as we start typing, all the other inputs will be flagged as invalid.
    //  Maybe we should check each one individually when we start to fill the form??
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
    this.http.post<Product>('http://localhost:3000/products', {...form.value, colors: this.colors})
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
    this.http.patch<Product>(`http://localhost:3000/products/${this.selectedProduct.id}`, {
      ...form.value,
      colors: this.colors
    })
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
        next: (v) => {
          this.products = this.products.filter(p => p.id !== this.selectedProduct?.id);
          this.selectedProduct = null;
          this.colors = [];
        },
        error: (e) => console.log(e),
        complete: () => console.log('Completed http.delete<Product>().')
      });
  }

  /**
   * Remove a color option from an existing product.
   *
   * @param color
   */
  removeColor(color: string): void {
    this.colors = this.colors.filter(c => c !== color)
  }

}
