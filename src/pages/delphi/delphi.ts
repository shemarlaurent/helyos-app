import { Component, ElementRef, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {ProductProvider} from "../../providers/product/product";
import {DelphiProvider} from "../../providers/delphi/delphi";

@IonicPage()
@Component({
  selector: "page-delphi",
  templateUrl: "delphi.html"
})
export class DelphiPage {
  days: any = 1;
  size: any = 4;
  pricing: {
    future: null,
  };
  sell = false;
  buy = false;
  keep = true;
  product: any;
  private relatedProducts: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private productProvider: ProductProvider, private delphiProvider: DelphiProvider) {}
  price = 6725;
  ionViewDidLoad() {
    this.getProduct();

    if (this.product) {
      this.forecast(this.product.name, this.size, this.days);
    }
  }

  private getProduct() {
    this.product = this.navParams.get('product');
    this.getRelatedProducts(this.product);
  }

  private getRelatedProducts(product) {
    this.productProvider.getRelatedProducts(product).subscribe((response) => {
      this.relatedProducts = response;
    })
  }

  forecast(name, size, days) {
    this.delphiProvider.forcast(name, size, days)
      .subscribe(price => this.pricing.future = price)
  }

  setSize($event) {
    this.size = $event;

    this.forecast(this.product.name, this.size, this.days);
  }

  setDay($event) {
    this.days = $event;

    this.forecast(this.product.name, this.size, this.days);
  }
}
