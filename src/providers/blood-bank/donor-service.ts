import {IDonor} from '../../model/donor-impl';
import {Injectable} from '@angular/core';

@Injectable()
export class DonorService{

    groups : string[] = [
        "A+","A-","B+","B-","AB+","AB-","O+","O-"
    ]

    donors : IDonor[] = [
            {
                name : "Sayem Hossain",
                id : 12101046,
                email : "sayemkcn@gmail.com",
                gender : "Male",
                phoneNumber : "01710226163",
                address : "Dhaka",
                bloodGroup : "A+",
                isAvailable : true,
                lastDonated : "25/5/2016"
            },
            {
                name : "Amirul Rifat",
                id : 14101077,
                email : "amirulrifat@gmail.com",
                gender : "Male",
                phoneNumber : "01710226163",
                address : "Dhaka",
                bloodGroup : "A+",
                isAvailable : true,
                lastDonated : "25/5/2016"
            },
            {
                name : "Barry Allen",
                id : 12101050,
                email : "barrytheflash@gmail.com",
                gender : "Male",
                phoneNumber : "01710226163",
                address : "starling city",
                bloodGroup : "AB-",
                isAvailable : true,
                lastDonated : "25/5/2016"
            }
        ];

    

}