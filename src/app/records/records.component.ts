import { RecordService } from './../record.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Record } from './record';


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  @Input() record: Record;

  constructor(
    private recordService: RecordService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }


  computeTotalBonus() {
    let totalBonus = 0;
    for (let goal of this.record.goals) {
      totalBonus += goal.bonus;
    }
    return totalBonus;
  }

}
