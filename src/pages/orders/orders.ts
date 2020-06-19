import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {Observable} from "rxjs";
import {OrderProvider} from "../../providers/order/order";

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
  private user: any;
  private orders: any;

  constructor(public navCtrl: NavController, public orderProvider: OrderProvider, private authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    this.user = this.authProvider.getUser.user;

    this.orderProvider.getOrders(this.user.token).subscribe((response) => {
      this.orders = response;
    })

  }

}
