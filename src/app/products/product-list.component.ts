import { Component } from '@angular/core';
import { PRODUCTS } from './products.data';
// import { IProduct } from './product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  // styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  public pageTitle: string;
  public imageWidth: number;
  public imageMargin: number;
  public isShowImage: boolean;
  public products: Array<any>;
  public listFilter: string;

  constructor() {
    this.pageTitle = 'Product List';
    this.imageWidth = 50;
    this.imageMargin = 2;
    this.isShowImage = false;
    this.listFilter = 'cart';
    this.products = new Array<any>(...PRODUCTS);
  }

  onShowImageClick(): void {
    this.isShowImage = !this.isShowImage;
  }
}
