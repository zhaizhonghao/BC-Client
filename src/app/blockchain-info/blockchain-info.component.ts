import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blockchain-info',
  templateUrl: './blockchain-info.component.html',
  styleUrls: ['./blockchain-info.component.css']
})
export class BlockchainInfoComponent implements OnInit {

  transactions = [
    {
      "txId": "0ccdd561e3760ee3fe934b505064cc1db6adf992e8916ed012f9e100ef261ecd",
      "channelId": "airlinechannel",
      "timestamp": "2020-02-02T14:05:18.584Z",
      "type": "ENDORSER_TRANSACTION"
    },
    {
      "txId": "0ccdd561e3760ee3fe934b505064cc1db6adf992e8916ed012f9e100ef261ecd",
      "channelId": "airlinechannel",
      "timestamp": "2020-02-02T14:05:18.584Z",
      "type": "ENDORSER_TRANSACTION"
    },
    {
      "txId": "0ccdd561e3760ee3fe934b505064cc1db6adf992e8916ed012f9e100ef261ecd",
      "channelId": "airlinechannel",
      "timestamp": "2020-02-02T14:05:18.584Z",
      "type": "ENDORSER_TRANSACTION"
    },
    {
      "txId": "0ccdd561e3760ee3fe934b505064cc1db6adf992e8916ed012f9e100ef261ecd",
      "channelId": "airlinechannel",
      "timestamp": "2020-02-02T14:05:18.584Z",
      "type": "ENDORSER_TRANSACTION"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumnsForChaincode: string[] = ['txId','channelId','timestamp', 'type'];
}
