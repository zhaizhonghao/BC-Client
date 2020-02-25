import { Component, OnInit } from '@angular/core';
import { HlfService } from '../hlf.service';


@Component({
  selector: 'info-board',
  templateUrl: './info-board.component.html',
  styleUrls: ['./info-board.component.css']
})


export class InfoBoardComponent implements OnInit {

  // peerInfo={
  //   name : "acme-peer1.acme.com",
  //   url : "grpc://127.0.0.1:7051",
  //   channelsJoined : [
  //     "airlinechannel",
  //     "mychannel"
  //   ],
  //   chaincodeInstalled: [
  //     {
  //       "name": "CryptocurrencyTxn",
  //       "version": "1.0"
  //     },
  //     {
  //       "name": "erc20",
  //       "version": "1.0"
  //     },
  //     {
  //       "name": "history",
  //       "version": "1.0"
  //     }
  //   ],
  //   network: [
  //     "acme-peer1.acme.com:7051"
  //   ]
  // };
  peerInfo:any;
  constructor(private hlfService:HlfService) { 
    
  }

  async ngOnInit() {
    this.hlfService.getPeerInfo()
    .subscribe(response=>{
      console.log(response.json());
      this.peerInfo=response.json();
    },error=>{
      alert("there is an unexpected error");
      console.log(error);
    });
  }

  displayedColumnsForChaincode: string[] = ['name', 'version'];
  
}
