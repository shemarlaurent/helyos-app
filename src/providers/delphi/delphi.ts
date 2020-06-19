import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {API} from "../../environment/environment";
import {retry} from "rxjs/operators";

/*
  Generated class for the DelphiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DelphiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DelphiProvider Provider');
  }

  forcast(name, size, days) : Observable<any> {
    return this.http.post(API.DELPHI_FORCAST_URL, {name, size, days})
      .pipe(
        retry(2)
      );
  }

}
