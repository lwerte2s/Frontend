import { RecordService } from '../record.service';
import { Record } from '../records/record';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.css']
})
export class RemarksComponent {

  constructor(private recordService: RecordService) { }

  @Input() record: Record;

    saveRemarks(remarks: string): void {
    this.recordService.saveRemarks(this.record.salesmanId, this.record.evaluationId, remarks);
  }

}
