import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../model/product';

@Component({
  selector: 'ac-backoffice',
  template: `
    <pre>{{products | json}}</pre>
  `,
  styles: []
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
