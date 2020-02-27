import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }
  instantiate(f){
    console.log(f.value);
  }

}
