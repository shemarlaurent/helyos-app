import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersPage } from '../orders/orders';
import { GeneralPage } from '../general/general';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  gotoOrdersPage() {
    this.navCtrl.push(OrdersPage, null, {
      animation: 'transition-ios',
      animate: true,
      direction: 'forward'
    });
  }

  gotoGeneralPage() {
    this.navCtrl.push(GeneralPage, null, {
      animate: true,
      animation: 'transition-ios',
      direction: 'forward'
    })
  }

}
