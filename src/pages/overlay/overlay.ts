import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the Overlay page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-overlay',
  templateUrl: 'overlay.html'
})
export class OverlayPage {

  constructor
  (public navCtrl: NavController,
    public navParams: NavParams,
  public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverlayPage');
  }
  openAlert(): void {
    let alert = this.alertCtrl.create({
      title: 'ionic v2',
      buttons: ['Ok', 'Cancel']



    });
    alert.present();
  }
  clickOnMenu(p:string): void {
    console.log('Clicou no menu' + p + '!');
  }
}
