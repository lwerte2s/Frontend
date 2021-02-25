import { Record } from '../records/record';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-performance-list',
  templateUrl: './social-performance-list.component.html',
  styleUrls: ['./social-performance-list.component.css']
})
export class SocialPerformanceListComponent  {

  @Input() records: Record[];
  selectedRecord: Record;

  constructor() { }

  onSelect(record: Record): void {
    this.selectedRecord = record;
  }

}
