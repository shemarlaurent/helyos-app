import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { FormsModule } from "@angular/forms";
import { MyApp } from "./app.component";
import { CameraPreview } from "@ionic-native/camera-preview";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { LoginPageModule } from "../pages/login/login.module";
import { SearchPageModule } from "../pages/search/search.module";
import { ProductdetailPageModule } from "../pages/productdetail/productdetail.module";

import { IonBottomDrawerModule } from "ion-bottom-drawer";
import { NebulapayPageModule } from "../pages/nebulapay/nebulapay.module";
import { CheckoutPageModule } from "../pages/checkout/checkout.module";
import { SizePageModule } from "../pages/size/size.module";
import { PypPageModule } from "../pages/pyp/pyp.module";
import { ComingsoonPageModule } from "../pages/comingsoon/comingsoon.module";
import { ThankyouPageModule } from "../pages/thankyou/thankyou.module";
import { AddressPageModule } from "../pages/address/address.module";
import { CardsPageModule } from "../pages/cards/cards.module";
import { SettingsPageModule } from "../pages/settings/settings.module";
import { OrdersPageModule } from "../pages/orders/orders.module";
import { GeneralPageModule } from "../pages/general/general.module";
import { CameraPageModule } from "../pages/camera/camera.module";
import { InstasearchPageModule } from "../pages/instasearch/instasearch.module";
import { RegularcheckoutPageModule } from "../pages/regularcheckout/regularcheckout.module";
import { DelphiPageModule } from "../pages/delphi/delphi.module";
import { AuthProvider } from '../providers/auth/auth';
import { ProductProvider } from '../providers/product/product';
import {HttpClientModule} from "@angular/common/http";
import {IonicStorageModule} from "@ionic/storage";
import { ComponentsModule} from "../components/components.module";
import { CartProvider } from '../providers/cart/cart';
import { PaymentProvider } from '../providers/payment/payment';
import { OrderProvider } from '../providers/order/order';
import { SearchProvider } from '../providers/search/search';
import { PlazmaProvider } from '../providers/plazma/plazma';
import { InstaSearchProvider } from '../providers/insta-search/insta-search';
import { DelphiProvider } from '../providers/delphi/delphi';

@NgModule({
  declarations: [MyApp, AboutPage, ContactPage, HomePage, TabsPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    LoginPageModule,
    SearchPageModule,
    ProductdetailPageModule,
    NebulapayPageModule,
    CheckoutPageModule,
    SizePageModule,
    ComingsoonPageModule,
    ThankyouPageModule,
    AddressPageModule,
    PypPageModule,
    CardsPageModule,
    SettingsPageModule,
    GeneralPageModule,
    CameraPageModule,
    OrdersPageModule,
    InstasearchPageModule,
    RegularcheckoutPageModule,
    DelphiPageModule,
    IonBottomDrawerModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, AboutPage, ContactPage, HomePage, TabsPage],
  providers: [
    StatusBar,
    SplashScreen,
    CameraPreview,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    ProductProvider,
    CartProvider,
    PaymentProvider,
    OrderProvider,
    SearchProvider,
    PlazmaProvider,
    InstaSearchProvider,
    DelphiProvider
  ]
})
export class AppModule {}
