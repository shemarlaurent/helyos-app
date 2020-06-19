import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstasearchPage } from './instasearch';

@NgModule({
  declarations: [
    InstasearchPage,
  ],
  imports: [
    IonicPageModule.forChild(InstasearchPage),
  ],
})
export class InstasearchPageModule {}
