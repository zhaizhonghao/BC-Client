import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-query-form',
  templateUrl: './cc-query-form.component.html',
  styleUrls: ['./cc-query-form.component.css']
})
export class CcQueryFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  query(f){
    console.log(f.value);
  }
}
