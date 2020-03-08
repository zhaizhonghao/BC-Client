import { Component, OnInit } from '@angular/core';
import { HlfService } from '../services/hlf.service';

@Component({
  selector: 'cc-instantiate-form',
  templateUrl: './cc-instantiate-form.component.html',
  styleUrls: ['./cc-instantiate-form.component.css']
})
export class CcInstantiateFormComponent implements OnInit {
  chaincodeTypes=[
    {id:1,name:"golang"},
    {id:2,name:"node"},
    {id:3,name:"java"},
  ]
  constructor(private hlfService:HlfService) {
    
   }

  ngOnInit(): void {
    
  }

  instantiate(f){
    console.log(f.value.chaincodeInstantiateInfo);
    let body = JSON.stringify(f.value.chaincodeInstantiateInfo);
    this.hlfService.installChaincode(body)
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
