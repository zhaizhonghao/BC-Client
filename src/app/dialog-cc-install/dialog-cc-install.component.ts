import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'dialog-cc-install',
  templateUrl: './dialog-cc-install.component.html',
  styleUrls: ['./dialog-cc-install.component.css']
})
export class DialogCcInstallComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogForInstall() {
    const dialogRef = this.dialog.open(DialogContentInstallDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogForInstantiate() {
    const dialogRef = this.dialog.open(DialogContentInstantiateDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'cc-install-dialog',
  templateUrl: 'cc-install-dialog.html',
})
export class DialogContentInstallDialog {}

@Component({
  selector: 'cc-instantiate-dialog',
  templateUrl: 'cc-instantiate-dialog.html',
})
export class DialogContentInstantiateDialog {}
