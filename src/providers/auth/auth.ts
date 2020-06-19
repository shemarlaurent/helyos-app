import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Events, Platform} from "ionic-angular";
import {Storage} from "@ionic/storage";
import {BehaviorSubject, Observable} from "rxjs";
import {API} from "../../environment/environment";
import {catchError, retry} from "rxjs/operators";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  authState = new BehaviorSubject(false);
  authUser: any;

  constructor(
    public http: HttpClient,
    private platform: Platform,
    private storage: Storage,
    public events: Events
  ) {
    this.platform.ready().then(response => {
      if (response) this.isAuthenticated()
    })
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
      if (error.status === 401) this.events.publish('invalid-credentials');
    }
    // return an observable with a user-facing error message
    return Observable.throw(
      'Something bad happened; please try again later.');
  };

  private isAuthenticated() {
    this.storage.get('HELYOS_USER').then(user => {
      if (user) {
        console.log(user);
        this.authUser = user;
        this.authState.next(true);
      }
    })
  }

  public authenticate(credentials) {
    return this.http.post(API.API_URL + 'auth/login', credentials)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public updateAccount(user) {
    return this.http.post(API.API_URL + 'auth/update', user)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  public addCard(card) {
    return this.http.post(API.API_URL + 'card/add', card, {
      headers: {
        'Authorization': 'Bearer ' + this.getUser.access_token || this.getUser.token
      }
    })
      .pipe(
        retry(2),
      )
  }

  public saveCredentials(response) : boolean {
    response.user.token = response.access_token;
    this.storage.set('HELYOS_USER', response).then((response) => {
      this.authState.next(true);
    });

    return  true;
  }


  public authenticated() {
    return this.authState.value;
  }

  public logout() {
    this.storage.set('HELYOS_USER', null);
  }

  get getUser() {
    return this.authUser
  }

  updateUser(user) {
    user.token = this.getUser.access_token || this.getUser.token;

    this.storage.set('HELYOS_USER', user)
  }

  saveCard(user) {
    user.token = this.getUser.access_token || this.getUser.token;

    this.storage.set('HELYOS_USER', user)
  }

}
