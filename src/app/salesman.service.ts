import { Salesman } from './salesmen/salesman';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SalesmanService {

  private salesmanUrl = 'http://localhost:3000/external/orangehrm/employees';

  constructor(
    private http: HttpClient,
  ) {}

  getSalesmen(): Observable<Salesman[]> {
  /** GET Salesman from the server */
    return this.http.get<Salesman[]>(this.salesmanUrl);
  }
}
