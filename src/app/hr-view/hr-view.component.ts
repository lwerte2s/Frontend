import { Record } from './../records/record';
import { RecordService } from './../record.service';
import { SalesmanService } from './../salesman.service';
import { Salesman } from './../salesmen/salesman';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-hr-view',
  templateUrl: './hr-view.component.html',
  styleUrls: ['./hr-view.component.css']
})
export class HrViewComponent implements OnInit {

  salesmen: Salesman[];
  records: Record[];
  selectedRecord: Record;
  thisYearsRecord: Record;

  constructor(
    private route: ActivatedRoute,
    private salesmanService: SalesmanService,
    private location: Location,
    private recordService: RecordService
  ) { }

  ngOnInit(): void {
    this.getSalesman();
    this.getRecords();
  }

  ngOnChanges(): void {
    if (this.records) {
      
    }
  }

  getSalesman(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.salesmanService.getSalesmen().subscribe(salesmen => this.salesmen = salesmen.filter(data => String(data.id) === id ) ); 
  }

  getRecords(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recordService.getEvaluationRecords(id).subscribe(records => { this.records = records, this.getThisYearsRecord() });
  }

  getThisYearsRecord(): void {
    for(let record of this.records) {
      if (record.year === new Date().getFullYear()) {
        this.thisYearsRecord = record;
      } else {
        this.thisYearsRecord = { salesmanId: this.records[0].salesmanId, evaluationId: 0 , year: new Date().getFullYear(), goals: [{description:'no data available', targetValue:0, actualValue:0, bonus:0}] };
      }
    }
  }
    

  goBack(): void {
    this.location.back();
  }

  onSelect(record: Record) {
    this.selectedRecord = record;
  }

  saveRemarks(remarks: string) {
    this.recordService.saveRemarks(this.thisYearsRecord.salesmanId, this.thisYearsRecord.evaluationId, remarks);
  }

}
