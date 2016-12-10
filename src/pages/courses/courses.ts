import { Component } from '@angular/core';
import {LoadingController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {CoursesService} from '../../providers/courses/courses-service';
import {Semester} from '../../model/semester';
import {Course} from '../../model/course';

@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
  providers: [CoursesService]
})
export class CoursesPage {

  semesters : Semester[];
  semester : string;
  courses : Course[];

  constructor(public navCtrl: NavController,private coursesService : CoursesService,private loadingCtrl : LoadingController) {
    this.semesters = coursesService.semesters;
  }

  ngOnInit(){
    this.showLoading();
    this.semester = this.semesters[0].name;
    this.courses = this.semesters[0].courses;
    console.log(this.courses);
  }

  semesterSelected(){
    this.showLoading();
    this.courses = this.semesters.find((sem)=> this.semester === sem.name).courses;
    
  }

  showLoading(){
    this.loadingCtrl.create({
      content : "Please wait...",
      duration : 2000
    }).present();
  }

}
