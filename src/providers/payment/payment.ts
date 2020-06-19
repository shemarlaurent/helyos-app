import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {API} from "../../environment/environment";
import {catchError, retry} from "rxjs/operators";
import {Observable} from "rxjs";
import {CompileTokenMetadata} from "@angular/compiler";

/*
  Generated class for the PaymentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaymentProvider {

  constructor(public http: HttpClient) {
  }

  checkout(order, token: string) {
    return this.http.post(API.API_URL + 'payment/checkout', order, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
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
        `body was: ${error}`);
    }
    // return an observable with a user-facing error message
    return Observable.throw(
      'Something bad happened; please try again later.');
  };

}
