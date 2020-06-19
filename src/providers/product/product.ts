import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {catchError, retry,} from "rxjs/operators";
import {ProductResource} from "../../models/product/product-resource";
import {Product} from "../../models/product/product";

import { API } from "../../environment/environment";

@Injectable()
export class ProductProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductProvider Provider');
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return Observable.throw(
      'Something bad happened; please try again later.');
  };

  // Get students data
  getProducts(): Observable<ProductResource> {
    return this.http
      .get<object>(API.API_URL + 'store/products/all')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getRelatedProducts(product): Observable<Array<Product>> {
    return  this.http.get(API.API_URL + `store/products/related/${product.slug}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

}
