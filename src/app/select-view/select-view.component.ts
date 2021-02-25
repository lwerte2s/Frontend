import { SelectViewServiceService } from '../select-view-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-select-view',
  templateUrl: './select-view.component.html',
  styleUrls: ['./select-view.component.css']
})
export class SelectViewComponent {

  constructor( private selectViewService: SelectViewServiceService ) { }

  getSelectedView(): string {
    return this.selectViewService.getSelectedView();
  }

  changeSelectedView(view: string): void {
    this.selectViewService.changeSelectedView(view);
  }


}
