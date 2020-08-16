import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

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
