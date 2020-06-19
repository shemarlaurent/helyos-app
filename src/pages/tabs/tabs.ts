import { Component } from "@angular/core";

import { AboutPage } from "../about/about";
import { ContactPage } from "../contact/contact";
import { HomePage } from "../home/home";
import { SearchPage } from "../search/search";
import { SettingsPage } from "../settings/settings";
import { NavController } from "ionic-angular";
import { CameraPage } from "../camera/camera";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  homeicon = "customhome";
  searchicon = "customsearchoffset";
  cameraicon = "customcamera";
  personicon = "custompersonoffset";

  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = CameraPage;
  tab4Root = SettingsPage;

  constructor(private navCtrl: NavController) {}

  openCameraPage() {
    this.navCtrl.push(CameraPage);
  }

  homeSelected() {
    this.homeicon = "customhome";
    this.personicon = "custompersonoffset";
    this.searchicon = "customsearchoffset";
  }

  personSelected() {
    this.personicon = "customperson";
    this.searchicon = "customsearchoffset";
    this.homeicon = "customhomeoffset";
  }

  searchSelected() {
    this.searchicon = "customsearch";
    this.homeicon = "customhomeoffset";
    this.personicon = "custompersonoffset";
  }
}
