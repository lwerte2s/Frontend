import { Order } from './orders/order';
import { Record } from './records/record';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private _recordsUrl = 'http://localhost:3000/evaluationRecord/'
  private _ordersUrl = 'http://localhost:3000/external/opencrx/'

  constructor(private http: HttpClient,) { }

  getEvaluationRecords(salesmanId: string): Observable<Record[]> {
    return this.http.get<Record[]>(this._recordsUrl+salesmanId);
  }

  getOrders(salesmanId: number): Observable<Order[]> {
    return this.http.get<Order[]>(this._ordersUrl+salesmanId);
  }
}
