import { NgModule } from '@angular/core';
import { PriceCurveComponent } from './price-curve/price-curve';
import { CartComponent } from './cart/cart';
import {IonBottomDrawerModule} from "ion-bottom-drawer";
import {IonicModule} from "ionic-angular";
import { CartIconComponent } from './cart-icon/cart-icon';

@NgModule({
	declarations: [
	  PriceCurveComponent,
    CartComponent,
    CartIconComponent
  ],
  imports: [
    IonBottomDrawerModule,
    IonicModule,

  ],
	exports: [
	  PriceCurveComponent,
    CartComponent,
    CartIconComponent
  ]
})
export class ComponentsModule {}
