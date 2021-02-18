import { MessageService } from './../message.service';
import { SalesmanService } from './../salesman.service';
import { Salesman } from './salesman';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesmen',
  templateUrl: './salesmen.component.html',
  styleUrls: ['./salesmen.component.css']
})
export class SalesmenComponent implements OnInit {

  salesmen: Salesman[];

  constructor(private salesmanService: SalesmanService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getSalesmen();
  }

  getSalesmen(): void {
    this.salesmanService.getSalesmen()
      .subscribe(salesmen => this.salesmen = salesmen);
    
  }

}
