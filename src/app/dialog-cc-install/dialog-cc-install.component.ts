import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'dialog-cc-install',
  templateUrl: './dialog-cc-install.component.html',
  styleUrls: ['./dialog-cc-install.component.css']
})
export class DialogCcInstallComponent implements OnInit {

  chaincodeInstantiated = [
    {channelName:"mychannel",chaincodeName:"erc20",version:"v1.0"},
    {channelName:"airlinechannel",chaincodeName:"token",version:"v1.0"}
  ]
  displayedColumnsForChaincode: string[] = ['channelName','chaincodeName', 'version','space','query','invoke'];

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

  openDialogForQuery(channelName,chaincodeName) {
    console.log(channelName,chaincodeName);
    const dialogRef = this.dialog.open(DialogContentQueryDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogForInvoke(channelName,chaincodeName) {
    console.log(channelName,chaincodeName);
    const dialogRef = this.dialog.open(DialogContentInvokeDialog);

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

@Component({
  selector: 'cc-query-dialog',
  templateUrl: 'cc-query-dialog.html',
})
export class DialogContentQueryDialog {}

@Component({
  selector: 'cc-invoke-dialog',
  templateUrl: 'cc-invoke-dialog.html',
})
export class DialogContentInvokeDialog {}
