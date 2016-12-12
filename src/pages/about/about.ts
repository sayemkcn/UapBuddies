import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  openUrl(urlName : string){
    switch(urlName){
      case "facebook":
        window.open("https://www.facebook.com/SAyEM.RimOn");
      break;
      case "playstore":
        window.open("https://play.google.com/store/apps/dev?id=9183820597138392476");
      break;
    }
  }

}
