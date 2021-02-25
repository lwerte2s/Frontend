import { Record } from '../records/record';
import { RecordService } from '../record.service';
import { SalesmanService } from '../salesman.service';
import { Salesman } from '../salesmen/salesman';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-ceo-view',
  templateUrl: './ceo-view.component.html',
  styleUrls: ['./ceo-view.component.css']
})
export class CeoViewComponent implements OnInit {

  salesmen: Salesman[];
  records: Record[];
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


  getSalesman(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.salesmanService.getSalesmen().subscribe(salesmen => this.salesmen = salesmen.filter(data => String(data.id) === id ) );
  }

  getRecords(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recordService.getEvaluationRecords(id).subscribe(records => { this.records = records; this.getThisYearsRecord(); });
  }

  getThisYearsRecord(): void {
    for ( const record of this.records) {
      if (record.year === new Date().getFullYear()) {
        this.thisYearsRecord = record;
      } else {
        this.thisYearsRecord = {
          salesmanId: this.records[0].salesmanId,
          evaluationId: 0 ,
          year: new Date().getFullYear(),
          goals: [{description: 'no data available', targetValue: 0, actualValue: 0, bonus: 0}]
        };
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

}
