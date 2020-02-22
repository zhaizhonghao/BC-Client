import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  contactMethods = [
    {id:1,name:"golang"},
    {id:2,name:"node"},
    {id:3,name:"java"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onChange(firstName){
    console.log(firstName);
  }
  submit(f){
    console.log(f);
  }

}
