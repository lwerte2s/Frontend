import { ActivatedRoute } from '@angular/router';
import { RecordService } from './../record.service';
import { Record } from '../records/record';
import { Component, Input, OnChanges } from '@angular/core';
import { Order } from './order'


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnChanges {

  @Input() record: Record;
  @Input() ohrmId: number;
  orders: Order[];
  

  constructor(private recordService: RecordService,
              private route: ActivatedRoute,) { }


  ngOnChanges(): void {
    if (this.record) {
      this.getOrders();
    }
  }

  getOrders(): void {
    this.recordService.getOrders(this.record.salesmanId).subscribe(orders =>  this.orders = orders ); 
    
  }

  computeOrderBonus() {
    let orderBonus = 0;
    for (let order of this.orders) {
      for (let o of order.orders) {
        orderBonus += o.bonus;
      }
    }
    return orderBonus;
  }

  computeSocialBonus() {
    let socialBonus = 0;
    for (let goal of this.record.goals) {
      socialBonus += goal.bonus;
    }
    return socialBonus;
  }

  computeTotalBonus() {
    return this.computeOrderBonus() + this.computeSocialBonus();
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  uploadBonusToOHRM(): void {
    this.recordService.uploadBonusToOHRM(this.ohrmId , this.record.year, this.computeTotalBonus());
  }

}
