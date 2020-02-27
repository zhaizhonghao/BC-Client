import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'wallet-info',
  templateUrl: './wallet-info.component.html',
  styleUrls: ['./wallet-info.component.css']
})
export class WalletInfoComponent implements OnInit {

  wallets=[
      {
        "label": "user1@org1.com"
      },
      {
        "label": "user2@org1.com"
      },
      {
        "label": "Admin@org1.com"
      },
      {
        "label": "Admin@org2.com"
      }
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    console.log('enter')
    const dialogRef = this.dialog.open(DialogContentIDCreateDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}

@Component({
  selector: 'identity-import-dialog',
  templateUrl: 'identity-import-dialog.html',
})
export class DialogContentIDCreateDialog {}
