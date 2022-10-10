import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ReportsComponent } from './reports/reports.component';
import { InventorySearchComponent } from './inventory-search/inventory-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InventoryComponent,
    ReportsComponent,
    InventorySearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
