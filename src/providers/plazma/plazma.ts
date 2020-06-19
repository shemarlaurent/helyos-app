import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {API} from "../../environment/environment";
import {retry} from "rxjs/operators";

/*
  Generated class for the PlazmaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlazmaProvider {

  constructor(public http: HttpClient) {

  }

  shoeCheck(image) : Observable<any> {
    return this.http.post(API.AUTHENTICATION_SHOE_CHECK_URL, image)
      .pipe(
        retry(2)
      );
  }

  shoeNameCheck(image: any) : Observable<any> {
    return this.http.post(API.AUTHENTICATION_SHOE_NAME_CHECK_URL, image)
      .pipe(
        retry(2)
      );
  }

  shoeAuthticityCheck(image: any) : Observable<any> {
    return this.http.post(API.AUTHENTICATION_SHOE_AUTHENTICITY_CHECK_URL, image)
      .pipe(
        retry(2)
      );
  }

  shoeSoleCheck(image: any) : Observable<any> {
    return this.http.post(API.SOLE_CHECK_URL, image)
      .pipe(
        retry(2)
      );
  }
}
