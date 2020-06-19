import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AboutPage} from "../about/about";
import {AddressPage} from "../address/address";


@IonicPage()
@Component({
  selector: 'page-general',
  templateUrl: 'general.html',
})
export class GeneralPage {
  showMembership = false;
  showAccount = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralPage');
  }


  toggleMembership() {
    this.showMembership = !this.showMembership;
  }

  toggleAccount() {
    this.showAccount = !this.showAccount;
  }

  changeAccount() {
    this.navCtrl.push(AddressPage)
  }
}
