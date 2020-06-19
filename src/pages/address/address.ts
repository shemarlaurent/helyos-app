import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import { countries } from "countries-list";

/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
  private user: any;
  private userData;

  private countryList;

  isLoading: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private toastController: ToastController
  ) {
    this.isLoading = false;
  }

  ionViewDidLoad() {
    this.user = this.authProvider.getUser.user || this.authProvider.getUser;

    console

    this.userData = this.user;

    if (this.userData) {
      this.userData.first_name = this.userData.name.split(' ')[0];
      this.userData.last_name = this.userData.name.split(' ')[1];
    }

    this.countryList = countries;

    this.countryList = Object.entries(countries).map(country => country[1].name);
  }

  updateDetails() {
    this.isLoading= true;
    this.userData.name = `${this.userData.first_name} ${this.userData.last_name}`;
    this.authProvider.updateAccount(this.userData).subscribe((response) => {
      this.authProvider.updateUser(response);
      this.isLoading= false;
      this.presentToast();
    })
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Account information successfully updated',
      duration: 3000
    });
    await toast.present();
  }
}
