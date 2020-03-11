import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HlfService } from '../services/hlf.service';

@Component({
  selector: 'cc-install-form',
  templateUrl: './cc-install-form.component.html',
  styleUrls: ['./cc-install-form.component.css']
})



export class CcInstallFormComponent implements OnInit {
  chaincodeTypes=[
    {id:1,name:"golang"},
    {id:2,name:"node"},
    {id:3,name:"java"},
  ]

  constructor(private hlfService:HlfService) { 

  }

  ngOnInit(): void {
  }
  
  install(f){
    
    let peers = []
    peers.push(f.value.chaincodeInstalledInfo.peers);
    
    let body = f.value.chaincodeInstalledInfo;
    body.peers = peers;

    this.hlfService.installChaincode(JSON.stringify(body))
    .subscribe(
      (response:any)=>{
      console.log(response);
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

}
