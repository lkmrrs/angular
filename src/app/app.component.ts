import { Component } from '@angular/core';
import { BusStop } from './bus-stop';
import { Arrival } from './arrival';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Lukes Bus Times and Stuff';
  arrival1 : Arrival = new Arrival(1, "London Waterloo", 3)
  arrival2 : Arrival = new Arrival(7, "Brazil", 12)
  arrival3 : Arrival = new Arrival(19, "London Paddington", 15) 
  busStop : BusStop;
  
  constructor() {
    this.busStop = new BusStop('Stratford', [this.arrival1, this.arrival2, this.arrival3]);
  }



}
