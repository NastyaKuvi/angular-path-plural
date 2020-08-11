import { Component } from '@angular/core';
import { PRODUCTS } from './products.data';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {

  public pageTitle: string;
  public products: Array<any>;

  constructor() {
    this.pageTitle = 'Product List';
    this.products = new Array<any>(...PRODUCTS);
  }
}
