import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


/**
 * Generated class for the ContentImagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-content-images',
  templateUrl: 'content-images.html',
})
export class ContentImagesPage {

  public images:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public db: AngularFireDatabase,
              public afAuth: AngularFireAuth,
              public toastCtrl: ToastController,
			  public loadingCtrl: LoadingController) {

  	//get the images
  	this.images = navParams.get('data');
  	console.log(this.images);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContentImagesPage');
  }

}
