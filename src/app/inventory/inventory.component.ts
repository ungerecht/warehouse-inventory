import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Item } from '../item';
import { ItemService } from '../item.service';

import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { ReceiveDialogComponent } from '../receive-dialog/receive-dialog.component';
import { SendDialogComponent } from '../send-dialog/send-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit, AfterViewInit {
  title = 'Inventory';
  displayedColumns: string[] = ['name', 'description', 'quantity', 'controls'];
  inventory = new MatTableDataSource<Item>();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private itemService: ItemService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getItems();
  }

  ngAfterViewInit(): void {
    this.inventory.sort = this.sort;
  }

  getItems(): void {
    this.itemService
      .getItems()
      .subscribe((items) => (this.inventory.data = items));
  }

  add(item: Item): void {
    item.name = item.name.trim().toLocaleLowerCase();
    if (!item) {
      return;
    }
    this.itemService.addItem(item).subscribe(() => {
      this.getItems();
    });
  }

  edit(item: Item): void {
    item.name = item.name.trim().toLocaleLowerCase();
    this.itemService.updateItem(item).subscribe(() => {
      this.getItems();
    });
  }

  receive(item: Item): void {
    this.itemService.updateItem(item).subscribe(() => {
      this.getItems();
    });
    //TODO record new receive transaction
  }

  send(item: Item): void {
    this.itemService.updateItem(item).subscribe(() => {
      this.getItems();
    });
    //TODO record new send transaction
  }

  delete(item: Item): void {
    this.itemService.deleteItem(item.id).subscribe(() => {
      this.getItems();
    });
  }

  filter(term: string): void {
    this.inventory.filter = term.trim().toLocaleLowerCase();
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddDialogComponent, {});

    dialogRef.afterClosed().subscribe((data) => {
      if (data) this.add(data as Item);
    });
  }

  openEditDialog(data: Item) {
    const dialogRef = this.dialog.open(EditDialogComponent, { data });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) this.edit(data);
    });
  }

  openReceiveDialog(data: Item) {
    const dialogRef = this.dialog.open(ReceiveDialogComponent, { data });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) this.receive(data);
    });
  }

  openSendDialog(data: Item) {
    const dialogRef = this.dialog.open(SendDialogComponent, { data });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) this.send(data);
    });
  }

  openDeleteDialog(data: Item) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, { data });

    dialogRef.afterClosed().subscribe((data) => {
      if (data) this.delete(data);
    });
  }

  log(message: string): void {
    console.log(message);
  }
}
