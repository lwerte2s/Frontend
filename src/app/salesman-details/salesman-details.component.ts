import { Component, Input } from '@angular/core';
import { Salesman } from '../salesmen/salesman';

@Component({
  selector: 'app-salesman-details',
  templateUrl: './salesman-details.component.html',
  styleUrls: ['./salesman-details.component.css']
})
export class SalesmanDetailsComponent {

  @Input() salesman: Salesman;


}
