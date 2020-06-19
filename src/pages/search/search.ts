import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, App } from "ionic-angular";
import { InstasearchPage } from "../instasearch/instasearch";
import {SearchProvider} from "../../providers/search/search";

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-search",
  templateUrl: "search.html"
})
export class SearchPage {
  products: any[];
  keyword: string;
  searching: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    private searchProvider: SearchProvider
  ) {}

  ionViewDidLoad() {
    // if instaSearch param
    if (this.navParams.get('search')) {
      this.keyword = this.navParams.get('search');
      this.search();
    }
    this.products = [];
    this.searching = false;

    this.searchProvider.getProducts().subscribe((response) => {
      this.products = response
    });
  }

  gotoInstasearchPage() {
    this.app.getRootNav().push(InstasearchPage);
  }

  search() {
    if (this.keyword !== '') {
      this.searching = true;
      this.searchProvider.search(this.keyword).subscribe((results) => {
        if (results) this.products = results
        this.searching = false;
      });
    }
  }

  gotoProductsPage(product: any) {

  }
}
