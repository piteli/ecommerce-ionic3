import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {RegisterPage} from '../register/register';


@IonicPage()
@Component({
  selector: 'page-auth-index',
  templateUrl: 'auth-index.html',
})
export class AuthIndexPage {

  page1: any = LoginPage;
  page2: any = RegisterPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthIndexPage');
  }

}
