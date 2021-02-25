import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectViewServiceService {

  private selectedView = 'salesman-view';

  constructor() { }

  getSelectedView(): string {
    return this.selectedView;
  }

  changeSelectedView(view: string): void {
    this.selectedView = view;
  }
}
