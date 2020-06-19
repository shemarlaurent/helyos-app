import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import {
  CameraPreview,
  CameraPreviewPictureOptions,
  CameraPreviewOptions,
  CameraPreviewDimensions
} from "@ionic-native/camera-preview";
import {InstaSearchProvider} from "../../providers/insta-search/insta-search";
import {SearchPage} from "../search/search";

@IonicPage()
@Component({
  selector: "page-instasearch",
  templateUrl: "instasearch.html"
})
export class InstasearchPage {
  picture: string;
  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: "rear",
    tapPhoto: true,
    previewDrag: false,
    toBack: true,
    alpha: 1
  };

  showHero = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cameraPreview: CameraPreview,
    private instaSearchProvider: InstaSearchProvider
  ) {}

  ionViewDidLoad() {
    this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  ionViewWillLeave() {
    this.cameraPreview.stopCamera();
  }

  takePicture() {
    // take a picture
    this.cameraPreview.takePicture(this.cameraPreviewOpts).then((imageData) => {
      this.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      // this.picture = 'assets/img/test.jpg';
    });

    this.search(this.picture);
  }

  private search(image) {
    this.instaSearchProvider.instaSearch(image)
      .subscribe(result => {
        this.navCtrl.push(SearchPage, {search: result})
      })
  }
}
