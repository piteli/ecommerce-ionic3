import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PolicyIndexPage } from './policy-index';

@NgModule({
  declarations: [
    PolicyIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(PolicyIndexPage),
  ],
})
export class PolicyIndexPageModule {}
