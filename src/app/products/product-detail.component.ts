import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { PRODUCTS } from './products.data';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public pageTitle: string;
  public product: IProduct;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) {
    this.pageTitle = 'Product details';
  }

  ngOnInit(): void {
    const id = +this._activeRoute.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = PRODUCTS[0];
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
