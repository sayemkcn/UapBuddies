import { Component } from '@angular/core';
import {LoadingController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import {CoursesService} from '../../../providers/courses/courses-service';
import {Semester} from '../../../model/semester';
import {Course} from '../../../model/course';
import {CourseDetailsPage} from '../course-details/course-details';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
  providers: [CoursesService,Storage]
})
export class CoursesPage {

  semesters : Semester[];
  semester : string;
  courses : Course[];

  constructor(public navCtrl: NavController,
              private coursesService : CoursesService,
              private loadingCtrl : LoadingController,
              private storage: Storage) {
    this.semesters = coursesService.semesters;
  }

  ngOnInit(){
    this.showLoading();
    // this.semester = this.semesters[0].name;
    // this.courses = this.semesters[0].courses;
    // console.log(this.courses);
    this.storage.get("semester").then((value=>{
      if(value!==null){
        console.log(value);
        this.semester = value;
        this.courses = this.semesters.find((sem)=> value === sem.name).courses;
        console.log(this.courses);
      }else{
        this.semester = this.semesters[0].name;
        this.courses = this.semesters[0].courses;
      }
    }));
    
  }

  semesterSelected() : void{
    this.showLoading();
    this.courses = this.semesters.find((sem)=> this.semester === sem.name).courses;
    this.storage.set("semester",this.semester);
  }

  onListItemClick(course : Course) : void{
    this.navCtrl.push(CourseDetailsPage,course);
  }

  showLoading(){
    this.loadingCtrl.create({
      content : "Please wait...",
      duration : 2000
    }).present();
  }

}
