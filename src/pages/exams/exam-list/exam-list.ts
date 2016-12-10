import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {IExam} from "../../../model/exam-impl";

@Component({
  selector: 'page-exam-list',
  templateUrl: 'exam-list.html',
  providers: [Storage]
})
export class ExamListPage {

  exams: IExam[];

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.exams = [];
  }

  ionViewDidLeave(){
    this.exams = [];
    this.storage.forEach((value, key)=> {
      if (value.exams !== null){
        this.exams.push.apply(this.exams,value.exams);
      }
    })
  }

  ionViewDidEnter() {
    this.storage.forEach((value, key)=> {
      if (value.exams !== null){
        this.exams.push.apply(this.exams,value.exams);
      }
    })

    console.log(this.exams);
  }

}
