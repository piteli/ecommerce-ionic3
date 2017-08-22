import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy';
import { TermsConditionsPage } from '../terms-conditions/terms-conditions';

/**
 * Generated class for the PolicyIndexPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-policy-index',
  templateUrl: 'policy-index.html',
})
export class PolicyIndexPage {

  page1: any = PrivacyPolicyPage;
  page2: any = TermsConditionsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PolicyIndexPage');
  }

}
