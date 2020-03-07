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
    let body = JSON.stringify(f.value.chaincodeInstalledInfo);
    this.hlfService.installChaincode(body)
    .subscribe(
      response=>{
      console.log(response.json());
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
