import {Exam} from './exam';
export class IExam implements Exam{
    name : string;
    date : Date;
    time : Date;
    note : string;
    alert : boolean;

    constructor(){
        this.date = new Date();
        this.time = new Date();
    }

}
