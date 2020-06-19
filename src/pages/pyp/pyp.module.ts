import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PypPage } from './pyp';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PypPage,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(PypPage),
  ],
})
export class PypPageModule {}
