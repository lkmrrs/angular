import { Component, OnInit } from '@angular/core';

import { BusStop } from '../bus-stop';
import { Arrival } from '../arrival';
import { StopsService } from '../stops.service';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit {
  
  selectedStop : BusStop;
  stops : BusStop[];
  constructor( private stopsService : StopsService) { 

  }
  
  onSelected(stop : BusStop){
    this.selectedStop = stop;
  }
  
  ngOnInit() {
    
    this.stops = this.stopsService.getStops();
  }

 

}
