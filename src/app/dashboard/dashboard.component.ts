import { Salesman } from '../salesmen/salesman';
import { Component, OnInit } from '@angular/core';
import { SalesmanService } from '../salesman.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
  
export class DashboardComponent implements OnInit {
  salesmen: Salesman[] = [];

  constructor(private salesmanService: SalesmanService) { }

  ngOnInit() {
    this.getSalesmen();
  }

  getSalesmen(): void {
    this.salesmanService.getSalesmen()
      .subscribe(salesmen => this.salesmen = salesmen.slice(1, 5));
  }
}