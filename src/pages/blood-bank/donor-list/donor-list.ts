import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DonorService} from '../../../providers/blood-bank/donor-service';
import {IDonor} from '../../../model/donor-impl';

@Component({
  selector: 'page-donor-list',
  templateUrl: 'donor-list.html',
  providers: [DonorService]
})
export class DonorListPage {

  group : string = "A+";
  groups : string[];
  donors : IDonor[];

  searchPhrase : string = "";
  shouldShowCancel : boolean = false;

  constructor(public navCtrl: NavController,private donorService: DonorService) {
    this.groups = donorService.groups;
    this.donors = donorService.donors.filter(e=>e.bloodGroup===this.group);
  }

  ionViewDidLoad() {
    console.log('Hello DonorListPage Page');
  }

  groupSelected(){
        this.donors = this.donorService.donors.filter(e=>e.bloodGroup===this.group);
  }

  onSearchInput($event){
    this.donors = this.donorService.donors.filter(e=>e.address.toLowerCase().indexOf(this.searchPhrase.toLowerCase()) !== -1)
    // console.log(this.searchPhrase);
  }
  onSearchCancel($event){
    console.log("canceled!");
  }
}
