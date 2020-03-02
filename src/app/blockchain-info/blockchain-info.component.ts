import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blockchain-info',
  templateUrl: './blockchain-info.component.html',
  styleUrls: ['./blockchain-info.component.css']
})
export class BlockchainInfoComponent implements OnInit {

  blocks = [
    {
      "blockNumber": "3",
      "blockHash": "a9fa13de7640219e4a78b6cd607b65a7127cc503a903ebc35157877c472293c7",
      "preBlockHash": "a439e2c8d6aae56c4871429dd7d44f31c17d0383c63da897f83129336ebe0ddd",
      "dataHash": "751b7fa3f83efff574bfe2e203594fd8fdf65374c1d6e1d9f1ff1a4991bcf199",
      "transactionsCount": 1,
      "transactions": [
        {
          "transactionID": "b4f8f4c58d31eb728a95285aa055d5927b76418283d42fd69e8a3d32788ded1b",
          "creatorID": "AcmeMSP"
        }
      ]
    },
    {
      "blockNumber": "3",
      "blockHash": "a9fa13de7640219e4a78b6cd607b65a7127cc503a903ebc35157877c472293c7",
      "preBlockHash": "a439e2c8d6aae56c4871429dd7d44f31c17d0383c63da897f83129336ebe0ddd",
      "dataHash": "751b7fa3f83efff574bfe2e203594fd8fdf65374c1d6e1d9f1ff1a4991bcf199",
      "transactionsCount": 1,
      "transactions": [
        {
          "transactionID": "b4f8f4c58d31eb728a95285aa055d5927b76418283d42fd69e8a3d32788ded1b",
          "creatorID": "AcmeMSP"
        }
      ]
    }
    
  ]

  channels = [
    "airlinechannel",
    "myachannel"
  ]
  constructor() { }

  ngOnInit(): void {
  }
  displayedColumnsForChaincode: string[] = ['blockNumber','blockHash','preBlockHash', 'transactionsCount'];
  
  onChannelSelect(channel){
    console.log(channel);
  }
  
}
