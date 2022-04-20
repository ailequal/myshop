import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../shared/model/product';

@Component({
  selector: 'ac-product',
  template: `
    <pre>{{product | json}}</pre>
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
    const productId: string = this.activatedRoute.snapshot.params['id'];

    // Get the whole product information.
    this.http.get<Product>(`http://localhost:3000/products/${productId}`).subscribe({
      next: (v) => this.product = v,
      error: (e) => console.log(e),
      complete: () => console.log('Completed http.get<Product>().')
    });
  }

}
