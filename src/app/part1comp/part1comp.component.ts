import { Component, OnInit, Input } from '@angular/core';
import { BusStop } from '../bus-stop';
import { ActivatedRoute } from '@angular/router';
import { StopsService } from '../stops.service';

@Component({
  selector: 'app-part1comp',
  templateUrl: './part1comp.component.html',
  styleUrls: ['./part1comp.component.css']
})
export class Part1compComponent implements OnInit {

  stop : BusStop;
  constructor(private route: ActivatedRoute, private stopsService : StopsService) {
    
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.stop = this.stopsService.getStop(id);
  }

}
