import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from '../item';

@Component({
  selector: 'app-send-dialog',
  templateUrl: './send-dialog.component.html',
  styleUrls: ['./send-dialog.component.css'],
})
export class SendDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Item) {}
}
