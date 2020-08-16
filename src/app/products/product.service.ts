import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/product';
import { PRODUCTS } from './products.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public getProducts(): Array<IProduct> {
    return PRODUCTS;
  }
}
