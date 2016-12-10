import {IExam} from "./exam-impl";
export interface Course{

    code : string;
    title : string;
    credits : number;
    exams? : IExam[];

}
