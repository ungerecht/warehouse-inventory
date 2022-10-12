import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from '../item';

@Component({
  selector: 'app-send-dialog',
  templateUrl: './send-dialog.component.html',
  styleUrls: ['./send-dialog.component.css'],
})
export class SendDialogComponent {
  item: Item = { ...this.data };
  sendQuantity: number = 1;
  date: string = new Date()
    .toLocaleString('sv', { timeZoneName: 'short' })
    .split(' ')[0];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Item,
    private dialogRef: MatDialogRef<SendDialogComponent>
  ) {}

  send() {
    if (this.item.quantity >= this.sendQuantity || this.sendQuantity < 1) {
      (this.item.quantity = this.item.quantity - this.sendQuantity),
        //TODO handle date
        this.dialogRef.close(this.item);
    } else {
      //error, sent quanitity must be between 1 and current quantity
    }
  }
}
