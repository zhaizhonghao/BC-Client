import { Component } from '@angular/core';


const ELEMENT_DATA = [
  {location: 1, name: 'Hydrogen'},
  {location: 2, name: 'Helium'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = '控制面板';
  displayedColumns: string[] = ['location', 'name'];
  dataSource = ELEMENT_DATA;
}
