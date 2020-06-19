import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CartProvider} from "../../providers/cart/cart";
import {NavController, Platform} from "ionic-angular";
import {Storage} from "@ionic/storage";
import {CheckoutPage} from "../../pages/checkout/checkout";
import {RegularcheckoutPage} from "../../pages/regularcheckout/regularcheckout";

/**
 * Generated class for the CartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
enum DrawerState {
  Bottom,
  Docked,
  Top
}

@Component({
  selector: 'cart',
  templateUrl: 'cart.html'
})


export class CartComponent {
   @Input('cartDrawer') cartDrawer = false;
   @Output() closeCart = new EventEmitter();
  shouldCartBounce = true;
  minimumCartHeight = 0;

  checkInterval;

  items = [];

  drawerState = DrawerState.Docked;


  constructor(public cartProvider: CartProvider, private navCtrl: NavController, private platform: Platform, private storage: Storage) {
    platform.ready().then(() => {
      this.getItems();
    })
  }

  ngOnInit() {
    this.items = this.cartProvider.getItems
  }

  ionViewDidLoad() {

  }


  toggleCartDrawer() {

    this.closeCart.emit('closeCart');

  }

  checkDrawerState() {
    this.checkInterval = setInterval(() => {
      if (this.cartDrawer) {
        if (this.drawerState == DrawerState.Bottom) {
          clearInterval(this.checkInterval);
          // if (this.drawer) return (this.drawer = false);

          if (this.cartDrawer) return (this.cartDrawer = false);
        }
      }
    }, 500);
  }

  removeItem(item: any) {

  }

   getItems() {
     this.storage.get('CART').then((cart) => {
       console.log(cart);
       if (cart) {

         this.items = cart;
       }

       else this.items = [];
     });
  }

  checkout() {
    this.navCtrl.push(RegularcheckoutPage);
  }
}
