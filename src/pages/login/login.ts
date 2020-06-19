import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {SignupPage} from "../signup/signup";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
credentials = {
  email: '',
  password: ''
};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authProvider: AuthProvider,
    public toastController: ToastController,
    public events: Events
  ) {
    this.events.subscribe('invalid-credentials', () => this.presentToast())
  }

  ionViewDidLoad() {
  }

  login() {
    this.authProvider.authenticate(this.credentials).subscribe((response) => {
      this.authProvider.saveCredentials(response);
      this.navCtrl.pop();
    })
  }

  signup() {
    this.navCtrl.push(SignupPage)
  }


  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Invalid username or password',
      duration: 3000
    });
    await toast.present();
  }
}
