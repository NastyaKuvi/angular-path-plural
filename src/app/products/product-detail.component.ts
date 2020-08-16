import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { PRODUCTS } from './products.data';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public pageTitle: string;
  public product: IProduct;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router,
    private _productsService: ProductService
  ) {
    this.pageTitle = 'Product details';
  }

  ngOnInit(): void {
    const id = +this._activeRoute.snapshot.paramMap.get('id');
    this._productsService.getProduct(id).subscribe({
      next: (data: IProduct) => this.product = data,
      error: (err: any) => console.log(err)
    });
    this.pageTitle += `: ${id}`;
    this.product = PRODUCTS[0];
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
