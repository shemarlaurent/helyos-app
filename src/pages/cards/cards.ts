import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

  card = {

  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider
    ) {
  }

  ionViewDidLoad() {

  }

  saveCard() {
    this.authProvider.addCard(this.card).subscribe((response) => {
      this.authProvider.updateUser(response);
      this.navCtrl.pop();
    })
  }
}
