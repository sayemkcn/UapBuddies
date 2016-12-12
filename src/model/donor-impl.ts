import {Donor} from './donor';
export class IDonor implements Donor{
     name : string;
    id : number;
    email : string;
    gender : string;
    phoneNumber : string;
    address : string;
    bloodGroup : string;
    isAvailable : boolean;
    lastDonated : string;

    constructor(){}
}