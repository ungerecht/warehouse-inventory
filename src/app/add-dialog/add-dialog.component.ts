import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Item } from '../item';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css'],
})
export class AddDialogComponent {
  name = new FormControl('', [Validators.required]);
  description: string = '';
  quantity = new FormControl(0, [Validators.min(1)]);
  unit: string = '';
  date = new FormControl(
    new Date().toLocaleString('sv', { timeZoneName: 'short' }).split(' ')[0],
    [Validators.required]
  );

  constructor(private dialogRef: MatDialogRef<AddDialogComponent>) {}

  add() {
    if (
      this.name.value!.length > 0 &&
      this.quantity.value! > 0 &&
      Date.parse(this.date.value!)
    ) {
      const data = {
        name: this.name.value,
        description: this.description,
        quantity: +this.quantity.value!,
        unit: this.unit,
        date: this.date.value,
      };
      this.dialogRef.close(data);
    }
  }
}
