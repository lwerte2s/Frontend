import { RecordService } from '../record.service';
import { Record } from '../records/record';
import { Component, Input, OnChanges } from '@angular/core';
import { Order } from './order';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnChanges {

  @Input() record: Record;
  @Input() ohrmId: number;
  orders: Order[];

  constructor(private recordService: RecordService
              ) { }


  ngOnChanges(): void {
    if (this.record) {
      this.getOrders();
    }
  }

  getOrders(): void {
    this.recordService.getOrders(this.record.salesmanId).subscribe(orders =>  this.orders = orders );
  }

  computeOrderBonus(): number {
    let orderBonus = 0;
    for (const order of this.orders) {
      for (const o of order.orders) {
        orderBonus += o.bonus;
      }
    }
    return orderBonus;
  }

  computeSocialBonus(): number {
    let socialBonus = 0;
    for (const goal of this.record.goals) {
      socialBonus += goal.bonus;
    }
    return socialBonus;
  }

  computeTotalBonus(): number {
    return this.computeOrderBonus() + this.computeSocialBonus();
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  uploadBonusToOHRM(): void {
    this.recordService.uploadBonusToOHRM(this.ohrmId, this.record.year, this.computeTotalBonus())
      .subscribe(res => {
        console.log(res);
        (res.hasOwnProperty('success')) ? alert("Saved successfully!") : alert("Something went wrong.");
      });
  }

}
