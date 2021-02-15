import { MessageService } from './message.service';
import { Salesman } from './salesmen/salesman';
import { Injectable } from '@angular/core';
import { SALESMEN } from './mock-salesman';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesmanService {

  private salesmanUrl = 'https://sepp-hrm.inf.h-brs.de/symfony/web/index.php//api/v1/employee/search';

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  getSalesmen(): Observable<Salesman[]> {
    /** GET Salesman from the server */
    //this.messageService.add('SalesmanService: fetched salesmen');
    //return this.http.get<Salesman[]>(this.salesmanUrl);
    const salesmen = of(SALESMEN);
    this.messageService.add('HeroService: fetched heroes');
    return salesmen;
  }

  getSalesman(id: number): Observable<Salesman> {
    // TODO: send the message _after_ fetching the salesman
    this.messageService.add(`SalesmanService: fetched saleman id=${id}`);
    return of(SALESMEN.find(salesman => salesman.id === id));
  }

  /** Log a SalesmanService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  
}
