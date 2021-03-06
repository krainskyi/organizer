import { DateService } from './../shared/date.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  constructor(private dateService:DateService) { }

  ngOnInit() {
  }

  go(dir:number){
    this.dateService.changeMonth(dir)
  }

}
