import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import {NavController} from 'ionic-angular';
import {Course} from '../../../model/course';
import {AddExamPage} from '../../exams/add-exam/add-exam';

@Component({
  selector: 'page-course-details',
  templateUrl: 'course-details.html'
})
export class CourseDetailsPage {
  course : Course;

  constructor(private navCtrl :  NavController ,private navParams: NavParams) {
    this.course = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log(this.navParams.data);
    console.log('Hello CourseDetailsPage Page');
  }

  addExamPage(){
    this.navCtrl.push(AddExamPage,this.course);
  }

}
