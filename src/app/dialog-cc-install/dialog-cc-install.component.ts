import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HlfService } from '../services/hlf.service';

@Component({
  selector: 'dialog-cc-install',
  templateUrl: './dialog-cc-install.component.html',
  styleUrls: ['./dialog-cc-install.component.css']
})
export class DialogCcInstallComponent implements OnInit {

  chaincodeInstantiated : any;
  displayedColumnsForChaincode: string[] = ['channelName','chaincodeName', 'version','space','query','invoke'];

  constructor(public dialog: MatDialog,private hlfService:HlfService) { }

  ngOnInit(): void {
    //TODO to get the instantiated chaincodes in all the channels
    this.hlfService.getInstantiatedChaincodes('org1','mychannel')
      .subscribe(
        response=>{
        console.log(response.json());
        this.chaincodeInstantiated = response.json();
      },
        (error:Response)=>{
          if(error.status === 400){
            alert('BAD REQUEST');
          }else{
            alert("there is an unexpected error");
            console.log(error);
          }
        });
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
