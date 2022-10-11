import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Item } from '../item';
import { inventory } from '../mock-inventory';

import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { ReceiveDialogComponent } from '../receive-dialog/receive-dialog.component';
import { SendDialogComponent } from '../send-dialog/send-dialog.component';

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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.inventory.sort = this.sort;
  }

  filter(term: string): void {
    this.inventory.filter = term.trim().toLocaleLowerCase();
  }

  openEditDialog(data: Item) {
    this.dialog.open(EditDialogComponent, { data });
  }

  openAddDialog() {
    this.dialog.open(AddDialogComponent, {});
  }

  openReceiveDialog(data: Item) {
    this.dialog.open(ReceiveDialogComponent, { data });
  }

  openSendDialog(data: Item) {
    this.dialog.open(SendDialogComponent, { data });
  }

  log(message: string): void {
    console.log(message);
  }
}
