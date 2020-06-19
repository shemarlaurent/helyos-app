import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {API} from "../../environment/environment";
import {catchError, retry} from "rxjs/operators";

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {

  constructor(public http: HttpClient) {

  }

  public search(query): Observable<Array<any>> {
    return this.http.get(API.API_URL + `search/${query}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  public getProducts() : Observable<any> {
    return this.http.get(API.API_URL + 'search-list-products')
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
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

}
