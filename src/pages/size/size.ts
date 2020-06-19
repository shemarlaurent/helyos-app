import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PypPage } from '../pyp/pyp';

/**
 * Generated class for the SizePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-size',
  templateUrl: 'size.html',
})
export class SizePage {
variations: Array<any> = [];
callback: Function;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   this.variations = this.navParams.get('variations');
    this.callback = this.navParams.get('callback');
  }

  gotoPypPage() {
    this.navCtrl.push(PypPage);
  }

  selectSize(variation) {
    this.callback(variation).then(() => {
      this.navCtrl.pop();
    });

  }
}
