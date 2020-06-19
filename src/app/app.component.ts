import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";
import { ProductdetailPage } from "../pages/productdetail/productdetail";
import { NebulapayPage } from "../pages/nebulapay/nebulapay";
import { CheckoutPage } from "../pages/checkout/checkout";
import { SizePage } from "../pages/size/size";
import { PypPage } from "../pages/pyp/pyp";
import { ComingsoonPage } from "../pages/comingsoon/comingsoon";
import { ThankyouPage } from "../pages/thankyou/thankyou";
import { AddressPage } from "../pages/address/address";
import { CardsPage } from "../pages/cards/cards";
import { OrdersPage } from "../pages/orders/orders";
import { SettingsPage } from "../pages/settings/settings";
import { GeneralPage } from "../pages/general/general";
import { RegularcheckoutPage } from "../pages/regularcheckout/regularcheckout";
import { InstasearchPage } from "../pages/instasearch/instasearch";
import { DelphiPage } from "../pages/delphi/delphi";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = TabsPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString("#a9a9a9");
      splashScreen.hide();
    });
  }
}
