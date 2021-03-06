import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map, } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productURL = 'api/products/products.json';

  constructor(
    private _http: HttpClient
  ) {
  }

  public getProducts(): Observable<Array<IProduct>> {
    return this._http.get<Array<IProduct>>(this._productURL).pipe(
      tap((data: any) => console.log(`All: ${JSON.stringify(data)}`)),
      catchError(this._handleError)
    );
  }

  public getProduct(id: number): Observable<IProduct> {
    return this._http.get<Array<IProduct>>(this._productURL).pipe(
      map((data: Array<IProduct>) => data.find(item => item.productId === id)),
      catchError(this._handleError)
    );
  }

  private _handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
