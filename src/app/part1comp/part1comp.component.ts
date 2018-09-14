import { Component, OnInit, Input } from '@angular/core';
import { BusStop } from '../bus-stop';

@Component({
  selector: 'app-part1comp',
  templateUrl: './part1comp.component.html',
  styleUrls: ['./part1comp.component.css']
})
export class Part1compComponent implements OnInit {

  @Input() stop : BusStop;

  constructor() {
    
  }
  ngOnInit() {
  }

}
