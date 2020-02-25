import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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
  constructor(http:Http) { 
    http.get('http://72.72.99.85:3000/api/peerInfo/org1/peer0.org1.example.com')
      .subscribe(response=>{
        console.log(response.json());
      });
  }

  ngOnInit(): void {
  }
  install(f){
    console.log(f.value);
    // let status = service.installChaincode(f.value);
    // //set Errors
  }

}
