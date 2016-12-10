import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import {Exam} from '../../../model/exam';
import {IExam} from '../../../model/exam-impl';
import {Course} from '../../../model/course';

@Component({
  selector: 'page-add-exam',
  templateUrl: 'add-exam.html'
})
export class AddExamPage {
  course : Course;
  exam : Exam;

  constructor(public navCtrl: NavController,private navParams : NavParams) {
    this.exam = new IExam();
    this.course = navParams.data;
  }

  ionViewDidLoad() {
    // console.log('Hello AddExamPage Page\n'+this.navParams.data);
  }

  addExam() : void{
    if(this.course.exams === undefined){
      this.course.exams = [];
      this.course.exams.push(this.exam);
    }
    
    console.log(this.course);
  }

}
