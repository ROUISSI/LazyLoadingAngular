import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MyModalComponent } from '../shared/my-modal/my-modal.component';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  name: string;
  color: string;
  title: string = "modal orders";
  footer: string = "footer orders";
  modalResult: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '500px',
      data: { name: this.name, color: this.color,title: this.title, footer: this.footer }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.modalResult = JSON.stringify(res);
    });
  }

  ngOnInit() {
  }

}
