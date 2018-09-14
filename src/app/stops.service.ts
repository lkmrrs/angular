import { Injectable } from '@angular/core';
import { BusStop } from './bus-stop';
import { Arrival} from './arrival';
@Injectable({
  providedIn: 'root'
})
export class StopsService {

  constructor() { }

  getStops() : BusStop[] {

    return [new BusStop('London Waterloo', [new Arrival(1, "Bournemouth", 3),(new Arrival(7, "Brazil", 12)),(new Arrival(1, "Bournemouth", 15))]),
    new BusStop('London Paddington', [new Arrival(1, "Bournemouth", 3),(new Arrival(7, "Brazil", 12)),(new Arrival(1, "Bournemouth", 15))]),
    new BusStop('Poplar', [new Arrival(1, "Bournemouth", 3),(new Arrival(7, "Brazil", 12)),(new Arrival(1, "Bournemouth", 15))])];
  }
}
