import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthIndexPage } from './auth-index';

@NgModule({
  declarations: [
    AuthIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthIndexPage),
  ],
})
export class AuthIndexPageModule {}
