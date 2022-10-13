import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from '../item';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css'],
})
export class EditDialogComponent {
  name = new FormControl(this.data.name, [Validators.required]);
  description: string = this.data.description;
  unit: string = this.data.unit;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Item,
    private dialogRef: MatDialogRef<EditDialogComponent>
  ) {}

  save() {
    if (this.name.value!.length > 0) {
      const edited = { ...this.data };
      edited.name = this.name.value!;
      edited.description = this.description;
      edited.unit = this.unit;
      this.dialogRef.close(edited);
    }
  }
}
