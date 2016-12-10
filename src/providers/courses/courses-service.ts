import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Semester} from '../../model/semester';

@Injectable()
export class CoursesService {

  constructor(public http: Http) {
  }

  semesters : Semester[] = [
    {
      id : 1.1,
      name : "First Year First Semester",
      courses : [
        {
          code : "HSS 101",
          title : "English I",
          credits : 3.00
        },
        {
          code : "HSS 111(A)",
          title : "Bangladesh Studies: Society and Culture",
          credits : 2.00
        },
        {
          code : "HSS 111(B)",
          title : "Bangladesh Studies: Bangladesh History",
          credits : 2.00
        },
        {
          code : "PHY 101",
          title : "Physics I",
          credits : 3.00
        },
        {
          code : "MTH 101",
          title : "Math I",
          credits : 3.00
        },
        {
          code : "CSE 101",
          title : "Computer Fundamentals",
          credits : 3.00
        },
        {
          code : "PHY 102",
          title : "Physics Lab",
          credits : 1.50
        },
        {
          code : "CSE 102",
          title : "Computer Fundamentals Lab",
          credits : 1.50
        },
      ]
    },
    {
      id : 1,
      name : "First Year Second Semester",
      courses : [
        {
          code : "HSS 103",
          title : "English II",
          credits : 3.00
        },
        {
          code : "PHY 103",
          title : "Physics II",
          credits : 3.00
        },
        {
          code : "MTH 103",
          title : "Math II",
          credits : 3.00
        },
        {
          code : "CSE 103",
          title : "Computer Programming I",
          credits : 3.00
        },
        {
          code : "CSE 105",
          title : "Discrete Mathematics",
          credits : 3.00
        },
        {
          code : "ECE 101",
          title : "Basic Electrical Engineering",
          credits : 3.00
        },
        {
          code : "CSE 104",
          title : "Computer Programming I Lab",
          credits : 1.50
        },
        {
          code : "ECE 102",
          title : "Basic Electrical Engineering Lab",
          credits : 1.50
        },
      ]
    }
  ]

}
