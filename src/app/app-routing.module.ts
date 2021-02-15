import { SalesmanDetailComponent } from './salesman-detail/salesman-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesmenComponent } from './salesmen/salesmen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'salesmen', component: SalesmenComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: SalesmanDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }