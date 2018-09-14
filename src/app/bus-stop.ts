import { Arrival } from "./arrival";

export class BusStop {
    location : string;
    arrivals : Arrival[];
    id : string;
    constructor(location: string, arrivals : Arrival[], id : string ){
        this.location = location;
        this.arrivals = arrivals;
        this.id = id;
    }
}
