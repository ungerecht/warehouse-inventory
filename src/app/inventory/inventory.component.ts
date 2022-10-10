import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Item } from '../item';
import { inventory } from '../mock-inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit, AfterViewInit {
  title = 'Inventory';
  displayedColumns: string[] = ['name', 'description', 'quantity', 'controls'];
  inventory = new MatTableDataSource<Item>(inventory);

  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.inventory.sort = this.sort;
  }

  log(message: string): void {
    console.log(message);
  }
}
