import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';

@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonBottomDrawerModule,
    IonicPageModule.forChild(CameraPage),
  ],
})
export class CameraPageModule {}
