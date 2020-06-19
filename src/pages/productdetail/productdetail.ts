import { Component, Output, EventEmitter, Renderer } from "@angular/core";
import {IonicPage, NavController, NavParams, Platform, ToastController} from "ionic-angular";
import { NebulapayPage } from "../nebulapay/nebulapay";
import {Product} from "../../models/product/product";
import {ProductProvider} from "../../providers/product/product";
import {SizePage} from "../size/size";
// @ts-ignore
import {Promise} from "es6-promise";
import {CartProvider} from "../../providers/cart/cart";
import {CheckoutPage} from "../checkout/checkout";
import {PypPage} from "../pyp/pyp";
import {DelphiPage} from "../delphi/delphi";

enum DrawerState {
  Bottom,
  Docked,
  Top
}

@IonicPage()
@Component({
  selector: "page-productdetail",
  templateUrl: "productdetail.html"
})
export class ProductdetailPage {
  @Output() closeDrawer = new EventEmitter();
  cart = false;
  shouldBounce = false;
  drawerState = DrawerState.Docked;
  minimumHeight = 0;
  drawer = false;

  checkInterval;

  showDefault = true;

  product: Product;
  variation : any = {};
  cartItem: any = {};

  sizeCallback = (_variation) => {
    return new Promise((resolve, reject) => {
      this.variation = _variation;
      this.showDefault = false;
      // this.addToCart();
      resolve();
    })
  };

  pypCallback = (price) => {
    return new Promise((resolve, reject) => {
      this.cartItem.price = price;
      resolve();
    });
  };

  nebulaPayCallback = (nebula) => {
    return new Promise((resolve, reject) => {
      this.cartItem.nebula = nebula;
      this.addToCart();
      resolve();
      this.navCtrl.pop().then(() => {
        this.navCtrl.push(CheckoutPage, {cart: this.cartItem})
      })
    })
  };

  relatedProducts: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private platform: Platform,
    private productProvider: ProductProvider,
    private cartProvider: CartProvider,
    private toastController: ToastController
  ) {}

  ionViewDidLoad() {
    console.log(this.drawerState);
    this.getProduct();
    this.platform.registerBackButtonAction(() => {
      if (this.drawer) return (this.drawer = false);

      // if (this.cartDrawer) return (this.cartDrawer = false);

      return this.navCtrl.pop();
    });

    this.checkDrawerState();
  }


  ionViewWillLeave() {
    clearInterval(this.checkInterval);
  }

  toggleDrawer() {
    this.drawer = !this.drawer;
    if (this.drawer === true) this.checkDrawerState();
  }


  openPayDrawer() {
    this.drawer = true;
  }


  openPayPage() {
    this.navCtrl.push(PypPage, {price: this.variation.price, callback: this.pypCallback});
  }

  checkDrawerState() {
    this.checkInterval = setInterval(() => {
      if (this.drawer) {
        if (this.drawerState == DrawerState.Bottom) {
          clearInterval(this.checkInterval);
          if (this.drawer) return (this.drawer = false);

          // if (this.cartDrawer) return (this.cartDrawer = false);
        }
      }
    }, 500);
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

  public chooseSize() {
    this.navCtrl.push(SizePage, {variations: this.product.variations, callback: this.sizeCallback });
  }

  public validate() {
    return this.cartItem.size !== null && this.cartItem.price !== null
  }


  toggleCart() {
    this.cart = !this.cart;
  }

  addToCart() {
    this.cartItem.uid = Math.floor(Math.random() * 10000);
    this.cartItem.size = this.variation.name;
    this.cartItem.price = this.variation.price;
    this.cartItem.product = this.product;
    this.cartProvider.addToCart(this.cartItem);
    this.presentToast();

  }


  buyNow() {
    if (this.validate()) {
      this.navCtrl.push(CheckoutPage);
    }
    else this.chooseSize();
  }

  openNebulaPage() {
    if (this.validate()) {
      this.navCtrl.push(NebulapayPage, {price: this.variation.price, callback: this.nebulaPayCallback}).then(() => {
        this.toggleDrawer();
      });
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your Item has been added to your cart',
      duration: 3000
    });
    await toast.present();
  }

  goToDelphi(product: Product) {
    this.navCtrl.push(DelphiPage, {product: this.product});
  }
}
