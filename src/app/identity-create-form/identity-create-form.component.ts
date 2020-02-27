import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'identity-create-form',
  templateUrl: './identity-create-form.component.html',
  styleUrls: ['./identity-create-form.component.css']
})
export class IdentityCreateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  import(f){
    console.log(f.value);
  }
}
