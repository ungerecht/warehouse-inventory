import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from '../item';

@Component({
  selector: 'app-send-dialog',
  templateUrl: './send-dialog.component.html',
  styleUrls: ['./send-dialog.component.css'],
})
export class SendDialogComponent {
  sendQuantity = new FormControl(1, [
    Validators.min(1),
    Validators.max(this.data.quantity),
  ]);
  date = new FormControl(
    new Date().toLocaleString('sv', { timeZoneName: 'short' }).split(' ')[0],
    [Validators.required]
  );

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Item,
    private dialogRef: MatDialogRef<SendDialogComponent>
  ) {}

  send() {
    if (
      this.sendQuantity.value! <= this.data.quantity &&
      this.sendQuantity.value! > 0 &&
      Date.parse(this.date.value!)
    ) {
      const data = {
        id: this.data.id,
        name: this.data.name,
        description: this.data.description,
        quantity: this.data.quantity - this.sendQuantity.value!,
        unit: this.data.unit,
        date: this.date.value,
      };
      this.dialogRef.close(data);
    }
  }
}
