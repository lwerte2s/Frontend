import { MessageService } from './message.service';
import { Salesman } from './salesmen/salesman';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SalesmanService {

  private salesmanUrl = 'http://localhost:3000/external/orangehrm/employees';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {}

  getSalesmen(): Observable<Salesman[]> {
  /** GET Salesman from the server */
    this.messageService.add('SalesmanService: fetched salesmen');
    return this.http.get<Salesman[]>(this.salesmanUrl);
  }
    
  
}
