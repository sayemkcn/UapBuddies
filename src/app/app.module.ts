import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CoursesPage } from '../pages/courses/courselist/courses';
import { CourseDetailsPage } from '../pages/courses/course-details/course-details';
import {AddExamPage} from '../pages/exams/add-exam/add-exam';
import {Storage} from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CoursesPage,
    CourseDetailsPage,
    HomePage,
    TabsPage,
    AddExamPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CoursesPage,
    CourseDetailsPage,
    HomePage,
    TabsPage,
    AddExamPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
