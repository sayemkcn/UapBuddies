import {Exam} from './exam';
import {Course} from "./course";
export class ICourse implements Course{

    code : string;
    title : string;
    credits : number;
    exams : Exam[];

    constructor(){
      this.exams = [];
    }
}
