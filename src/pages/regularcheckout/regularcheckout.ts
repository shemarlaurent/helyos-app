import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {CartProvider} from "../../providers/cart/cart";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PaymentProvider} from "../../providers/payment/payment";
import {CardsPage} from "../cards/cards";
import {AddressPage} from "../address/address";
import {ThankyouPage} from "../thankyou/thankyou";

/**
 * Generated class for the RegularcheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regularcheckout',
  templateUrl: 'regularcheckout.html',
})
export class RegularcheckoutPage {
  user;
  private cart: any;
  private loading: boolean;
  private order: any;

  constructor(public http: HttpClient,
              public navCtrl: NavController,
              public cartProvider: CartProvider,
              private authProvider: AuthProvider,
              private paymentController: PaymentProvider
  ) {
    this.loading = false;
    this.order = {
      cart: [],
      card: null,
    }
  }

  ionViewDidLoad() {
    this.user = this.authProvider.getUser.user || this.authProvider.getUser;

    this.cart = this.cartProvider.getItems;

  }

  get total() {
    if (this.cart) {
      return this.cart.map(item => (item.pricedProduct || item.price)).reduce((current, next) => parseInt(current) + parseInt(next))
    }
    else {
      return 0;
    }
  }

  makePayment() {
    this.order.cart = [];
    this.cart.forEach(item => {
      let cart = {
        product: item.product.id,
        size: item.size,
        price: item.price,
        nebula: item.nebula || null,
        pricedProduct: item.pricedProduct || null,
      };

      this.order.cart.push(cart)
    });

    this.paymentController.checkout(this.order, this.user.token).subscribe((response) => {
      this.cartProvider.clearCart();
      this.navCtrl.push(ThankyouPage)
    })

  }

  setPayment() {
    this.navCtrl.push(CardsPage)
  }

  setAddress() {
    this.navCtrl.push(AddressPage)
  }
}
