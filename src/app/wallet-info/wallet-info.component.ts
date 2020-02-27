import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wallet-info',
  templateUrl: './wallet-info.component.html',
  styleUrls: ['./wallet-info.component.css']
})
export class WalletInfoComponent implements OnInit {

  wallets=[
      {
        "label": "Admin@acme.com"
      },
      {
        "label": "Admin@budget.com"
      }
  ]
  constructor() { }

  ngOnInit(): void {
  }



}
