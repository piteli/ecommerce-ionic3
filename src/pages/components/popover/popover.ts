import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthIndexPage } from '../../authentication/auth-index/auth-index';
import { ViewController } from 'ionic-angular';
import { NotificationsPage } from '../../notifications/notifications';
import { WishlistPage } from '../../wishlist/wishlist';
import { OrdersPage } from '../../orders/orders';

/**
 * Generated class for the PopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  toAuthIndexPage(){
    this.navCtrl.push(AuthIndexPage);
    this.viewCtrl.dismiss();
  }

  toNotiPage(){
    this.navCtrl.push(NotificationsPage);
    this.viewCtrl.dismiss();
  }

  toWishPage(){
    this.navCtrl.push(WishlistPage);
    this.viewCtrl.dismiss();
  }

  toOrdersPage(){
    this.navCtrl.push(OrdersPage);
    this.viewCtrl.dismiss();
  }

}
