import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SalesmenComponent } from './salesmen/salesmen.component';
import { AppRoutingModule } from './app-routing.module';
import { RecordsComponent } from './records/records.component';
import { OrdersComponent } from './orders/orders.component';
import { SelectViewComponent } from './select-view/select-view.component';
import { SalesmanViewComponent } from './salesman-view/salesman-view.component';
import { CeoViewComponent } from './ceo-view/ceo-view.component';
import { HrViewComponent } from './hr-view/hr-view.component';
import { SalesmanDetailsComponent } from './salesman-details/salesman-details.component';
import { SocialPerformanceListComponent } from './social-performance-list/social-performance-list.component';
import { RemarksComponent } from './remarks/remarks.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesmenComponent,
    RecordsComponent,
    OrdersComponent,
    SelectViewComponent,
    SalesmanViewComponent,
    CeoViewComponent,
    HrViewComponent,
    SalesmanDetailsComponent,
    SocialPerformanceListComponent,
    RemarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
