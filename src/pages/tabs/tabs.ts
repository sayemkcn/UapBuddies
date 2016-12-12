import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { CoursesPage } from '../courses/courselist/courses';
import {ExamListPage} from "../exams/exam-list/exam-list";
import {DonorListPage} from '../blood-bank/donor-list/donor-list';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = CoursesPage;
  tab3Root: any = ExamListPage;
  tab4Root: any = DonorListPage;
  tab5Root: any = AboutPage;

  constructor() {

  }
}
