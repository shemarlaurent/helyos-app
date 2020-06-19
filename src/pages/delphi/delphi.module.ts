import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { DelphiPage } from "./delphi";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [DelphiPage],
  imports: [ComponentsModule, IonicPageModule.forChild(DelphiPage)]
})
export class DelphiPageModule {}
