import {Exam} from './exam';
export class IExam implements Exam{
    name : string;
    time : Date;
    note : string;
    alert : boolean;

    constructor(){
        this.time = new Date();
        this.alert = true;
    }

}
