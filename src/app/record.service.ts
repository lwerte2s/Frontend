import { Order } from './orders/order';
import { Record } from './records/record';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  private _recordsUrl = 'http://localhost:3000/evaluationRecord/';
  private _toOpenCRXUrl = 'http://localhost:3000/external/opencrx/';
  private _toOHRMUrl = 'http://localhost:3000/external/orangehrm/';

  constructor( private http: HttpClient ) { }

  getEvaluationRecords(salesmanId: string): Observable<Record[]> {
    return this.http.get<Record[]>(this._recordsUrl + salesmanId);
  }


  getOrders(salesmanId: number): Observable<Order[]> {
    return this.http.get<Order[]>(this._toOpenCRXUrl + salesmanId);
  }


  saveRemarks(salesmanId: number, evaluationId: number, remarks: string): void {
    this.http.patch(this._recordsUrl + `${salesmanId}/${evaluationId}/remarks`, { remarks: remarks }).subscribe(res => console.log(res));
  }


  uploadBonusToOHRM(ohrmId: number, year: number, bonus: number): Observable<object> {
    return this.http.post(this._toOHRMUrl + `${ohrmId}/bonussalary`, { value: bonus, year: year });
  }
}
