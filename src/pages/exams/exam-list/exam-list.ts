import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {IExam} from "../../../model/exam-impl";
import {ICourse} from '../../../model/course-impl';

@Component({
  selector: 'page-exam-list',
  templateUrl: 'exam-list.html',
  providers: [Storage]
})
export class ExamListPage {

  exams: IExam[];
  upcomingExams : IExam[]; 
  pastExams : IExam[];

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.exams = [];
    this.upcomingExams = [];
    this.pastExams = [];
  }

  ionViewDidLeave(){
    this.exams = [];
    // this.pastExams = [];
    this.storage.forEach((value, key)=> {
      if (value.exams !== null){
        this.exams.push.apply(this.exams,value.exams);
      }
    });
  }

  ngOnInit(){
     // find all saved exams
    this.storage.forEach((value, key)=> {
      if (value.exams !== null){
        this.exams.push.apply(this.exams,value.exams);
      }
    });
  }

  ngDoCheck() {
    this.seperateExams(this.exams);
    // console.log(this.exams);
  }

  seperateExams(exams: IExam[]){
    // seperate past exams
    this.pastExams = exams.filter(e=>new Date(e.time.toString()).getTime()<new Date().getTime());
    this.upcomingExams = exams.filter(e=>new Date(e.time.toString()).getTime()>new Date().getTime());
    console.log("Past Exams");
    console.log(this.pastExams);
    console.log("Upcoming Exams");
    console.log(this.upcomingExams);
  }

  toggleNotification(exam : IExam){
    this.storage.forEach(value => {
      let course : ICourse = value;
      if(course.exams != null){
        for(let i=0;i<course.exams.length;i++){
          if((course.exams[i].name===exam.name) && (course.exams[i].time)===exam.time){
            course.exams[i].alert = !exam.alert;
            this.exams[i].alert = !exam.alert;
          }
        }
        this.storage.set(course.code,course);
      }
    });
  }
}
