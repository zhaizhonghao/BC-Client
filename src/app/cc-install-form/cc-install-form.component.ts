import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
