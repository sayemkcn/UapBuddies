import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {Course} from '../../../model/course';
import {AddExamPage} from '../../exams/add-exam/add-exam';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-course-details',
  templateUrl: 'course-details.html',
  providers: [Storage]
})
export class CourseDetailsPage {
  course : Course;

  constructor(private navCtrl :  NavController ,private navParams: NavParams,private storage : Storage) {
    this.course = this.navParams.data;
    // console.log(this.course);
  }

  ionViewDidEnter(){
    // console.log(this.course);
    this.storage.get(this.course.code).then((value)=>{
      if(value != null){
        this.course = value;
      }
      // console.log(this.course);
    })
  }
  addExamPage(){
    this.navCtrl.push(AddExamPage,this.course);
  }

}
