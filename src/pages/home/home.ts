import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductdetailPage } from '../productdetail/productdetail';
import {AuthProvider} from "../../providers/auth/auth";
import {LoginPage} from "../login/login";
import {ProductProvider} from "../../providers/product/product";
import {Product} from "../../models/product/product";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  products: Array<Product> = [];
  cart = false;
  constructor(
    public navCtrl: NavController,
    private authProvider: AuthProvider,
    private productProvider: ProductProvider
  ) {

  }

  ionViewWillEnter() {
    // Load the data
    this.productProvider.getProducts().subscribe((response) => {
      this.products = response.data;

    })
  }

  gotoProductsPage(product) {
    if (this.authProvider.authenticated()) {
      this.navCtrl.push(ProductdetailPage, {product});
    }

    else {
      this.navCtrl.push(LoginPage)
    }


  }

  toggleCart() {
    this.cart = !this.cart;
    console.log(this.cart)
  }
}
