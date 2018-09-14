import { ActivatedRoute } from '@angular/router';

export class Arrival {
    busNumber : number;
    location : string;
    time : number;

    constructor(busNumber : number, location: string, time : number){
        this.busNumber = busNumber;
        this.location = location;
        this.time = time;
    }
}
