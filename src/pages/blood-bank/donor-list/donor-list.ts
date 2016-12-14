import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ActionSheetController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {DonorService} from '../../../providers/blood-bank/donor-service';
import {IDonor} from '../../../model/donor-impl';
import {CallNumber} from 'ionic-native';
import {SMS} from 'ionic-native';

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

  constructor(public navCtrl: NavController,
              private donorService: DonorService,
              private actionSheetCtrl: ActionSheetController,
              private alertCtrl: AlertController) {
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

  onListItemClick(donor : IDonor){
    this.showActionSheet(donor);
  }

  callNumber(phoneNumber: string){
    CallNumber.callNumber(phoneNumber, true)
                      .then(() => console.log('Launched dialer!'))
                      .catch(() => console.log('Error launching dialer'));
  }

  sendMessage(phoneNumber:string){
      let alert = this.alertCtrl.create({
        title: 'Write Message',
        inputs: [
          {
            name: 'message',
            placeholder: 'Write your message..'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Send',
            handler: data => {
              if (data.message) {
                SMS.send(phoneNumber,data.message);
              } else {
                this.alertCtrl.create({
                  title: 'Failure!',
                  subTitle: 'Message can\'t be empty. Please write something and then press Send.',
                  buttons: ['Ok']
                }).present();
                return false;
              }
            }
          }
        ]
      });
      alert.present();

  }

  showActionSheet(donor: IDonor) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Action',
      buttons: [
        {
          text: 'Call '+donor.name,
          handler: () => {
            this.callNumber(donor.phoneNumber)
          }
        },{
          text: 'Send A Message',
          handler: () => {
            this.sendMessage(donor.phoneNumber);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
