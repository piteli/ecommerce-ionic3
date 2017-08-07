import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HighlightPage} from '../highlight/highlight';
import {TaobaoCollectionPage} from '../taobao-collection/taobao-collection';
import {ElectronicPage} from '../electronic/electronic';
import {FashionPage} from '../fashion/fashion';
import {HomeLivingPage} from '../home-living/home-living';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	page1: any = HighlightPage;
  	page2: any = TaobaoCollectionPage;
  	page3: any = ElectronicPage;
  	page4: any = FashionPage;
  	page5: any = HomeLivingPage;


  constructor(public navCtrl: NavController) {

  }

}
