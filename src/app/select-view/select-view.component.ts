import { SelectViewServiceService } from './../select-view-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-view',
  templateUrl: './select-view.component.html',
  styleUrls: ['./select-view.component.css']
})
export class SelectViewComponent implements OnInit {

  constructor( private selectViewService: SelectViewServiceService ) { }

  ngOnInit(): void {
  }

  getSelectedView() {
    return this.selectViewService.getSelectedView();
  }

  changeSelectedView(view: string) {
    this.selectViewService.changeSelectedView(view);
  }


}
