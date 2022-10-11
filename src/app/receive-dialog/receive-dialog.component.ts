import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '../item';

@Component({
  selector: 'app-receive-dialog',
  templateUrl: './receive-dialog.component.html',
  styleUrls: ['./receive-dialog.component.css'],
})
export class ReceiveDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Item) {}
}
