import { Record } from './../records/record';
import { RecordService } from './../record.service';
import { SalesmanService } from './../salesman.service';
import { Salesman } from './../salesmen/salesman';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-salesman-detail',
  templateUrl: './salesman-detail.component.html',
  styleUrls: ['./salesman-detail.component.css']
})
export class SalesmanDetailComponent implements OnInit {

  salesmen: Salesman[];
  records: Record[];
  selectedRecord: Record;

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
    this.recordService.getEvaluationRecords(id).subscribe(records => { this.records = records, console.log("records: "+records)});
  }

  goBack(): void {
    this.location.back();
  }

  onSelect(record: Record) {
    this.selectedRecord = record;
  }



}
