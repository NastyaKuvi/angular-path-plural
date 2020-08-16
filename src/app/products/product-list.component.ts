import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './products.data';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  public pageTitle: string;
  public imageWidth: number;
  public imageMargin: number;
  public isShowImage: boolean;
  public products: Array<IProduct>;
  public filteredProducts: Array<IProduct>;

  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this._performFilterProducts() : this.products;
  }

  constructor(
    private _productService: ProductService
  ) {
    this.pageTitle = 'Product List';
    this.imageWidth = 50;
    this.imageMargin = 2;
    this.isShowImage = false;
    this.listFilter = '';
    }

  ngOnInit(): void {
    this.products = new Array<any>(...this._productService.getProducts());
    this.filteredProducts = this.products;
  }

  onShowImageClick(): void {
    this.isShowImage = !this.isShowImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle =  `Product List: ${message}`;
  }

  private _performFilterProducts() {
    return this.products.filter(
      (product: IProduct) => product.productName.toLowerCase().includes(this.listFilter.toLowerCase()));
  }
}
