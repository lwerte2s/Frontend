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

  @Input() salesman: Salesman;

  constructor(
    private route: ActivatedRoute,
    private salesmanService: SalesmanService,
    private location: Location) { }

  ngOnInit(): void {
    this.getSalesman()
  }

  getSalesman(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.salesmanService.getSalesman(id)
      .subscribe(salesman => this.salesman = salesman)
  }

  goBack(): void {
    this.location.back();
  }

}
