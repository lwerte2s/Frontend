import { SelectViewServiceService } from '../select-view-service.service';
import { SalesmanService } from '../salesman.service';
import { Salesman } from './salesman';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesmen',
  templateUrl: './salesmen.component.html',
  styleUrls: ['./salesmen.component.css']
})
export class SalesmenComponent implements OnInit {

  salesmen: Salesman[];

  constructor(
    private salesmanService: SalesmanService,
    private selectViewService: SelectViewServiceService
  ) { }

  ngOnInit(): void {
    this.getSalesmen();
  }

  getSalesmen(): void {
    this.salesmanService.getSalesmen()
      .subscribe(salesmen => this.salesmen = salesmen);
  }

  getSelectedView(): string {
    return this.selectViewService.getSelectedView();
  }

}
