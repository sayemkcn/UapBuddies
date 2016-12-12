import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import {LoadingController} from 'ionic-angular';
import {Exam} from '../../../model/exam';
import {IExam} from '../../../model/exam-impl';
import {Course} from '../../../model/course';
import {Storage} from '@ionic/storage';
import { LocalNotifications } from 'ionic-native';

@Component({
  selector: 'page-add-exam',
  templateUrl: 'add-exam.html',
  providers: [Storage]
})
export class AddExamPage {
  course : Course;
  exam : Exam;

  constructor(public navCtrl: NavController,private navParams : NavParams,private loadingCtrl: LoadingController,private storage: Storage) {
    this.exam = new IExam();
    this.course = navParams.data;
  }

  ionViewDidLoad() {
    console.log("PARAM DATA:");
    console.log(this.navParams.data);
  }

  showLoading(){
    this.loadingCtrl.create({
      content : "Loading...",
      duration: 2000
    }).present();
  }
  
  addExam() : void{
    this.showLoading();
    // check if thic course is already stored
    this.storage.get(this.course.code).then((value)=>{
      if(value===null){
        this.course.exams = [];
      }
      this.course.exams.push(this.exam); // add exam to the course
      this.storage.set(this.course.code,this.course); // save on storage
      // set notification
      LocalNotifications.schedule({
        text : this.course.title+" is about to happen!",
        at: new Date(new Date().getTime()+3600),
        led: 'FF0000',
        sound: null
      });
      this.navCtrl.pop();
    })
    
  }

}
