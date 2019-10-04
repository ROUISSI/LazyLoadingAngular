import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MyModalComponent } from '../shared/my-modal/my-modal.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  name: string;
  color: string;
  title: string = "modal customers";
  footer: string = "footer customers";
  modalResult: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '250px',
      data: { name: this.name, color: this.color,title: this.title, footer: this.footer }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.modalResult = JSON.stringify(res);
    });
  }

  ngOnInit() {
  }

}
