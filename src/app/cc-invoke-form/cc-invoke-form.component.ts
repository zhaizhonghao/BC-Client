import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-invoke-form',
  templateUrl: './cc-invoke-form.component.html',
  styleUrls: ['./cc-invoke-form.component.css']
})
export class CcInvokeFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  invoke(f){
    console.log(f.value);
  }
}
