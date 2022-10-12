import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Item } from '../item';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css'],
})
export class AddDialogComponent {
  name: string = '';
  description: string = '';
  quantity: number = 0;
  unit: string = '';
  date: string = new Date()
    .toLocaleString('sv', { timeZoneName: 'short' })
    .split(' ')[0];

  constructor(private dialogRef: MatDialogRef<AddDialogComponent>) {}

  add() {
    const data = {
      name: this.name,
      description: this.description,
      quantity: this.quantity,
      unit: this.unit,
    };
    //TODO handle date
    this.dialogRef.close(data);
  }
}
