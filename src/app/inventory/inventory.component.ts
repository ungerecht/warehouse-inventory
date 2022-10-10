import { Component, OnInit } from '@angular/core';

import { Item } from '../Item';
import { inventory } from '../mock-inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  title = 'Inventory';
  displayedColumns: string[] = ['name', 'description', 'quantity', 'controls'];
  inventory: Item[] = inventory;

  constructor() {}

  ngOnInit(): void {}

  log(message: string): void {
    console.log(message);
  }
}
