import {Exam} from './exam';
export interface Course{

    code : string;
    title : string;
    credits : number;
    exams? : Exam[];

}