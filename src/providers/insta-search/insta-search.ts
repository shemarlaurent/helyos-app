import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {API} from "../../environment/environment";
import {retry} from "rxjs/operators";

/*
  Generated class for the InstaSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InstaSearchProvider {

  constructor(public http: HttpClient) {
    console.log('Hello InstaSearchProvider Provider');
  }

  instaSearch(image) :Observable<any> {
    return this.http.post(API.INSTA_SEARCH_URL, image)
      .pipe(
        retry(2)
      );
  }

}
