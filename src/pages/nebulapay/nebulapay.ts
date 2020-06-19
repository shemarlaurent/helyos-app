import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SizePage } from "../size/size";

/**
 * Generated class for the NebulapayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-nebulapay",
  templateUrl: "nebulapay.html"
})
export class NebulapayPage {
  timeState = "daily";
  occurence = 5;
  days;
  amount;
  callback;
  nebula;
  payment: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.amount = parseInt(this.navParams.get('price'));
    this.callback = this.navParams.get('callback');
    this.days = 1;
    this.nebula = {};
    this.payment = this.amount;
  }

  get step() {
    return this.amount / this.occurence
  }

  get amountToPay() {
    if (this.days > 1) {
      return this.amount / this.days
    } else {
      return this.amount
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad NebulapayPage");
  }

  increaseDays() {
    if (this.days < this.occurence) {
      this.days++
      this.payment = this.payment - this.step
    }
  }
  decreaseDays() {
    if (this.days > 1) {
      this.days--
      this.payment = this.payment + this.step
    }
  }
  increasePayment() {
    if(this.days > 1 && this.payment < this.amount) {
      this.days--;
      this.payment = this.payment + this.step
    }
  }
  decreasePayment() {
    if (this.days < this.occurence) {
      this.days++;
      this.payment = this.payment - this.step
    }
  }


  choosePlan() {
    let plan = {
      days: this.days,
      installments: this.amountToPay
    };

    this.callback(plan).then(() => {
      this.navCtrl.pop();
    })
  }
}
