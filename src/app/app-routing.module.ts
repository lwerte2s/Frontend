import { CeoViewComponent } from './ceo-view/ceo-view.component';
import { SalesmanViewComponent } from './salesman-view/salesman-view.component';
import { SelectViewComponent } from './select-view/select-view.component';
import { SalesmenComponent } from './salesmen/salesmen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/select', pathMatch: 'full' },
  { path: 'salesmen', component: SalesmenComponent },
  { path: 'select', component: SelectViewComponent },
  { path: 'salesman-view/:id', component: SalesmanViewComponent },
  { path: 'ceo-view/:id', component: CeoViewComponent },
  { path: 'hr-view/:id', component: CeoViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }