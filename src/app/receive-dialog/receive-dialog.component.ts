import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from '../item';

@Component({
  selector: 'app-receive-dialog',
  templateUrl: './receive-dialog.component.html',
  styleUrls: ['./receive-dialog.component.css'],
})
export class ReceiveDialogComponent {
  item: Item = { ...this.data };
  receiveQuantity: number = 1;
  date: string = new Date()
    .toLocaleString('sv', { timeZoneName: 'short' })
    .split(' ')[0];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Item,
    private dialogRef: MatDialogRef<ReceiveDialogComponent>
  ) {}

  receive() {
    if (this.receiveQuantity >= 0) {
      this.item.quantity =
        Number(this.item.quantity) + Number(this.receiveQuantity);
      //TODO handle date
      this.dialogRef.close(this.item);
    } else {
      //error, receive quanitity must be greater than 0
    }
  }
}
