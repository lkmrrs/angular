import { Injectable } from '@angular/core';
import { BusStop } from './bus-stop';
import { Arrival} from './arrival';
@Injectable({
  providedIn: 'root'
})
export class StopsService {

  stops : BusStop[] = [new BusStop('London Waterloo', [new Arrival(1, "Bournemouth", 3),(new Arrival(7, "Brazil", 12)),(new Arrival(1, "Bournemouth", 15))], "1"),
    new BusStop('London Paddington', [new Arrival( 1, "Bournemouth", 4),(new Arrival(7, "Brazil", 12)),(new Arrival(1, "Bournemouth", 15))], "2"),
    new BusStop('Poplar', [new Arrival(1, "Bournemouth", 5),(new Arrival(7, "Brazil", 12)),(new Arrival(1, "Bournemouth", 15))], "3")]

  constructor() { }

  getStops() : BusStop[] {
    return this.stops; 
  }

  getStop(id :string) {
    return this.stops.find(x => x.id===id);
  }
}
