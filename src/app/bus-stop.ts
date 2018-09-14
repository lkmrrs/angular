import { Arrival } from "./arrival";

export class BusStop {
    location : string;
    arrivals : Arrival[];

    constructor(location: string, arrivals : Arrival[]){
        this.location = location;
        this.arrivals = arrivals;
    }
}
