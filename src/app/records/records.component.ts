
import { Component, Input } from '@angular/core';
import { Record } from './record';


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent  {

  @Input() record: Record;
  @Input() remarksVisibility: boolean;

  constructor() { }

  computeTotalBonus(): number {
    let totalBonus = 0;
    for (const goal of this.record.goals) {
      totalBonus += goal.bonus;
    }
    return totalBonus;
  }

}
