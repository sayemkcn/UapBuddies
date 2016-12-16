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
        }
      ]
    },
    {
      id : 1.2,
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
        }
      ]
    },
    {
      id : 2.1,
      name : "Second Year First Semester",
      courses : [
        {
          code : "ACN 201",
          title : "Principles of Accounting",
          credits : 2.00
        },
        {
          code : "MTH 201",
          title : "Math III",
          credits : 3.00
        },
        {
          code : "ECN 201",
          title : "Principles of Economics",
          credits : 2.00
        },
        {
          code : "CSE 203",
          title : "Computer Programming II",
          credits : 3.00
        },
        {
          code : "CSE 205",
          title : "Data Structures",
          credits : 3.00
        },
        {
          code : "ECE 201",
          title : "Electronic Devices and Circuits",
          credits : 3.00
        },
        {
          code : "CSE 204",
          title : "Computer Programming II Lab",
          credits : 1.50
        },
        {
          code : "CSE 206",
          title : "Data Structures Lab",
          credits : 0.75
        },
        {
          code : "ECE 202",
          title : "Electronic Devices and Circuits Lab",
          credits : 1.50
        }
      ]
    },
    {
      id : 2.2,
      name : "Second Year Second Semester",
      courses : [
        {
          code : "IMG 201",
          title : "Principles of Management",
          credits : 2.00
        },
        {
          code : "MTH 203",
          title : "Math IV",
          credits : 4.00
        },
        {
          code : "CSE 207",
          title : "Algorithm",
          credits : 3.00
        },
        {
          code : "CSE 209",
          title : "Numerical Methods",
          credits : 3.00
        },
        {
          code : "CSE 211",
          title : "Assembly Language Programming",
          credits : 2.00
        },
        {
          code : "CSE 231",
          title : "Digital Logic Design",
          credits : 3.00
        },
        {
          code : "CSE 208",
          title : "Algorithm Lab",
          credits : 0.75
        },
        {
          code : "CSE 212",
          title : "Assembly Language Programming Lab",
          credits : 0.75
        },
        {
          code : "CSE 232",
          title : "Digital Logic Design Lab",
          credits : 1.50
        }
      ]
    },
    {
      id : 3.1,
      name : "Third Year First Semester",
      courses : [
        {
          code : "MTH 301",
          title : "Statistics and Probability",
          credits : 2.00
        },
        {
          code : "ECE 301",
          title : "Electrical Drives and Instrumentation",
          credits : 3.00
        },
        {
          code : "ECE 303",
          title : "Digital Electronics and Pulse Techniques",
          credits : 3.00
        },
        {
          code : "CSE 321",
          title : "Database Systems",
          credits : 3.00
        },
        {
          code : "CSE 331",
          title : "Computer Architecture I",
          credits : 3.00
        },
        {
          code : "CSE 300",
          title : "Software Development",
          credits : 1.50
        },
        {
          code : "ECE 302",
          title : "Electrical Drives and Instrumentation Lab",
          credits : 1.50
        },
        {
          code : "ECE 304",
          title : "Digital Electronics and Pulse Techniques Lab",
          credits : 1.50
        },
        {
          code : "CSE 322",
          title : "Database Systems Lab",
          credits : 1.50
        }
      ]
    },
    {
      id : 3.2,
      name : "Third Year Second Semester",
      courses : [
        {
          code : "CSE 303",
          title : "Operating System",
          credits : 3.00
        },
        {
          code : "CSE 305",
          title : "Information Systems",
          credits : 3.00
        },
        {
          code : "CSE 315",
          title : "Data Communication",
          credits : 3.00
        },
        {
          code : "CSE 333",
          title : "Microprocessors",
          credits : 3.00
        },
        {
          code : "CSE 335",
          title : "Digital System Design",
          credits : 3.00
        },
        {
          code : "CSE 304",
          title : "Operating System Lab",
          credits : 1.50
        },
        {
          code : "CSE 306",
          title : "Information Systems Lab",
          credits : 0.75
        },
        {
          code : "CSE 334",
          title : "Microprocessors Lab",
          credits : 1.50
        },
        {
          code : "CSE 336",
          title : "Digital System Design Lab",
          credits : 1.50
        }
      ]
    },
    {
      id : 4.1,
      name : "Fourth Year First Semester",
      courses : [
        {
          code : "CSE 401",
          title : "Software Engineering",
          credits : 3.00
        },
        {
          code : "CSE 403",
          title : "Complier Design",
          credits : 3.00
        },
        {
          code : "CSE 421",
          title : "Computer Network",
          credits : 3.00
        },
        {
          code : "CSE 431",
          title : "Computer Graphics",
          credits : 3.00
        },
        {
          code : "CSE …",
          title : "Option I",
          credits : 3.00
        },
        {
          code : "CSE 400",
          title : "Project/ Thesis",
          credits : 3.00
        },
        {
          code : "CSE 404",
          title : "Complier Design Lab",
          credits : 0.75
        },
        {
          code : "CSE 422",
          title : "Computer Network Lab",
          credits : 1.50
        },
        {
          code : "CSE 432",
          title : "Computer Graphics Lab",
          credits : 1.50
        }
      ]
    },
    {
      id: 1,
      name : "Option I",
      courses : [
        {
          code : "CSE 405",
          title : "Simulation and Modeling",
          credits : 3.00
        },
        {
          code : "CSE 423",
          title : "Computer System Performance Evaluation",
          credits : 3.00
        },
        {
          code : "CSE 433",
          title : "Computer Architecture II",
          credits : 3.00
        }
      ]
    },
    {
      id : 4.1,
      name : "Fourth Year Second Semester",
      courses : [
        {
          code : "CSE 407",
          title : "Artificial Intelligence and Expert System",
          credits : 3.00
        },
        {
          code : "CSE 411",
          title : "VLSI Design",
          credits : 3.00
        },
        {
          code : "CSE 435",
          title : "Computer Interfacing",
          credits : 3.00
        },
        {
          code : "CSE …",
          title : "Option II",
          credits : 3.00
        },
        {
          code : "CSE 400",
          title : "Project/ Thesis",
          credits : 3.00
        },
        {
          code : "CSE 408",
          title : "Artificial Intelligence and Expert System Lab",
          credits : 1.50
        },
        {
          code : "CSE 412",
          title : "VLSI Design Lab",
          credits : 1.50
        },
        {
          code : "CSE 436",
          title : "Computer Interfacing Lab",
          credits : 1.50
        },
        {
          code : "CSE …",
          title : "Option II Lab",
          credits : 0.75
        }
      ]
    },
    {
      id: 2,
      name : "Option II",
      courses : [
        {
          code : "CSE 425",
          title : "Fault Tolerant Systems",
          credits : 3.00
        },
        {
          code : "CSE 437",
          title : "Pattern Recognition",
          credits : 3.00
        },
        {
          code : "CSE 445",
          title : "Multimedia Technology",
          credits : 3.00
        }
      ]
    },
    {
      id : 3,
      name : "Option II Lab",
      courses : [
        {
          code : "CSE 426",
          title : "Fault Tolerant System Lab",
          credits : 0.75
        },
        {
          code : "CSE 438",
          title : "Pattern Recognition Lab",
          credits : 0.75
        },
        {
          code : "CSE 446",
          title : "Multimedia Technology Lab",
          credits : 0.75
        }
      ]
    }
  ]

}
