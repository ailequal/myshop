import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../shared/model/product';

@Component({
  selector: 'ac-product',
  template: `
    <div class="px-4 pt-5 my-5 text-center border-bottom">
      <h1 class="display-4 fw-bold">{{product?.label}}</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">{{product?.description}}</p>

        <!--TODO: Select Color Button placeholder-->
      </div>
      <div>
        <img [src]="product?.image" class="shadow-lg p-4" width="100%" style="max-width: 50vh; margin: 0 auto" alt="#">
      </div>
      <!--TODO: The shop route should not be hardcoded like this...-->
      <button class="btn btn-link" routerLink="/shop">Back To Shop</button>
    </div>
  `
})
export class ProductComponent implements OnInit {

  product: Product | null = null;

  /**
   * The constructor method.
   */
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  /**
   * The ngOnInit method.
   */
  ngOnInit(): void {
    // Get the product id from the current url.
    const productId: number = parseInt(this.activatedRoute.snapshot.params['id']);

    // Get the whole product information.
    this.http.get<Product>(`http://localhost:3000/products/${productId}`).subscribe({
      next: (v) => this.product = v,
      error: (e) => console.log(e),
      complete: () => console.log('Completed http.get<Product>().')
    });
  }

}
