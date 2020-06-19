import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductdetailPage } from './productdetail';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ProductdetailPage,
  ],
  imports: [
    IonBottomDrawerModule,
    IonicPageModule.forChild(ProductdetailPage),
    ComponentsModule,
  ],
})
export class ProductdetailPageModule {}
