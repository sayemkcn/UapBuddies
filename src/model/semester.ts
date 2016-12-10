import {Course} from './course';

export interface Semester{
    id : number;
    name : string;
    courses : Course[];
}