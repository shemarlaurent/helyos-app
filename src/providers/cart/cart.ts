import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Platform} from "ionic-angular";
import {Storage} from "@ionic/storage";
/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartProvider {
items;

  constructor(
    public http: HttpClient,
    private storage: Storage,
    private platform: Platform
  ) {
    this.items = [];
    this.platform.ready().then(() => this.loadCart());
  }

   loadCart() {
    this.storage.get('CART').then((cart) => {
      console.log(cart);
      if (cart) {
        this.items = cart;
      }
    })
  }

  public addToCart(item) {
    this.items.push(item);

  }

  public clearCart() {
    this.storage.set('CART', []).then(() => this.loadCart());
  }

  get getItems() {
   return this.items;
  }

  get getNebulaItems() {
    return this.items.filter((item) => (item.nebula !== null || true))
  }

  public getItem(uuid) {
    return this.items.find((item) => item.uuid === uuid);
  }

  public removeItem(uuid) {
    let item = this.getItem(uuid);
    this.items.splice(1, this.items.indexOf(item));
  }


}
