import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './products.data';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
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
  public errorMessage: string;

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
    this._productService.getProducts().subscribe((data: Array<IProduct>) => {
      this.products = data;
      this.filteredProducts = this.products;
    });
    this._productService.getProducts().subscribe({
      next: data => {
        this.products = data;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
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
