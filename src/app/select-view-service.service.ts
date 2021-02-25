import { AppRoutingModule } from './app-routing.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectViewServiceService {

  private selectetView = "salesman-view";

  constructor() { }

  getSelectedView():string {
    return this.selectetView;
  }

  changeSelectedView(view: string): void {
    this.selectetView = view;
  }
}
