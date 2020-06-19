import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController
} from "ionic-angular";
import {
  CameraPreview,
  CameraPreviewPictureOptions,
  CameraPreviewOptions,
  CameraPreviewDimensions
} from "@ionic-native/camera-preview";
import {PlazmaProvider} from "../../providers/plazma/plazma";

enum DrawerState {
  Bottom,
  Docked,
  Top
}

@IonicPage()
@Component({
  selector: "page-camera",
  templateUrl: "camera.html"
})
export class CameraPage {
  plazma: any = {};
  sole: boolean = false;
  auth: boolean = false;
  picture: any;
  shouldBounce = false;
  drawerState = DrawerState.Docked;
  minimumHeight = 80;
  drawer = false;

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

  showBottomSoleLoader = false;
  showSideSoleLoader = false;

  showSideSoleCorrectResult = false;
  showSideSoleIncorrectResult = true;

  showBottomSoleCorrectResult = false;
  showBottomSoleIncorrectResult = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cameraPreview: CameraPreview,
    private actionSheet: ActionSheetController,
    private plazmaProvider: PlazmaProvider
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

  openController() {
    this.actionSheet
      .create({
        title: "Options",
        buttons: [
          {
            text: "Authentication",
            handler: () => {
              this.auth = true;
              this.toggleDrawer();
            }
          },
          {
            text: "Sole Check",
            handler: () => {
            this.sole = true;
            this.toggleDrawer();
          }
          }
        ]
      })
      .present();
  }

  takePicture() {
    // take a picture
    this.cameraPreview.takePicture(this.cameraPreviewOpts).then((imageData) => {
      this.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      // this.picture = 'assets/img/test.jpg';
    });

    if (this.auth) this.authenticate(this.picture);
    if (this.sole) this.checkSole(this.picture);
  }

  authenticate(image) {
    this.showSideSoleLoader = true;
    // check if the image is a shoe
    this.plazmaProvider.shoeCheck(image)
      .subscribe(response => {
        if (response.toLowerCase() !== 'not shoe') {
          this.plazma.real = true;

          // check if image is a real shoe or fake shoe
          this.plazmaProvider.shoeNameCheck(image)
            .subscribe(response => {
              this.plazma.name = response;
            });

          this.plazmaProvider.shoeAuthticityCheck(image)
            .subscribe(response => {
              this.plazma.authenticity = response;
            });

          this.showSideSoleLoader = false;
          this.showSideSoleCorrectResult = true;
        }
        else {
          this.plazma.not_shoe = true;
          this.showSideSoleLoader = false;
          this.showSideSoleIncorrectResult = true;
        }
      });

  }

  checkSole(image) {
    this.showBottomSoleLoader = true;
    this.plazmaProvider.shoeCheck(image)
      .subscribe(response => {
        if (response.toLowerCase() !== 'not shoe') {
          this.plazma.real = true;

          this.plazmaProvider.shoeNameCheck(image)
            .subscribe(response => {
              this.plazma.name = response;
            });

          this.plazmaProvider.shoeSoleCheck(image)
            .subscribe(response => {
              this.plazma.sole = response.toLowerCase();
            });

          this.showBottomSoleLoader = false;
          this.showBottomSoleCorrectResult = true;
        }
        else  {
          this.plazma.not_shoe = true;
          this.showBottomSoleLoader = false;
          this.showBottomSoleIncorrectResult = true;
        }
      })
  }

  private toggleDrawer() {
    this.drawer = ! this.drawer
  }
}
