import { Component, OnInit, ViewChild } from '@angular/core';
import { HlfService } from '../services/hlf.service';

@Component({
  selector: 'app-blockchain-info',
  templateUrl: './blockchain-info.component.html',
  styleUrls: ['./blockchain-info.component.css']
})
export class BlockchainInfoComponent implements OnInit {

  // blocks = [
  //   {
  //     "blockNumber": "3",
  //     "blockHash": "a9fa13de7640219e4a78b6cd607b65a7127cc503a903ebc35157877c472293c7",
  //     "preBlockHash": "a439e2c8d6aae56c4871429dd7d44f31c17d0383c63da897f83129336ebe0ddd",
  //     "dataHash": "751b7fa3f83efff574bfe2e203594fd8fdf65374c1d6e1d9f1ff1a4991bcf199",
  //     "transactionsCount": 1,
  //     "transactions": [
  //       {
  //         "transactionID": "b4f8f4c58d31eb728a95285aa055d5927b76418283d42fd69e8a3d32788ded1b",
  //         "creatorID": "AcmeMSP"
  //       }
  //     ]
  //   },
  //   {
  //     "blockNumber": "3",
  //     "blockHash": "a9fa13de7640219e4a78b6cd607b65a7127cc503a903ebc35157877c472293c7",
  //     "preBlockHash": "a439e2c8d6aae56c4871429dd7d44f31c17d0383c63da897f83129336ebe0ddd",
  //     "dataHash": "751b7fa3f83efff574bfe2e203594fd8fdf65374c1d6e1d9f1ff1a4991bcf199",
  //     "transactionsCount": 1,
  //     "transactions": [
  //       {
  //         "transactionID": "b4f8f4c58d31eb728a95285aa055d5927b76418283d42fd69e8a3d32788ded1b",
  //         "creatorID": "AcmeMSP"
  //       }
  //     ]
  //   }
    
  // ]

  channels = [
    "airlinechannel",
    "myachannel"
  ]

  blockHeight : any;
  numberOfNode = 8;
  blocks = [];
  data
  constructor(private hlfService:HlfService) { }

  ngOnInit(): void {
      this.hlfService.getBlockHeight('org1','mychannel')
        .subscribe(
          response=>{
            this.blockHeight = response.json().blockHeight;
          console.log(this.blockHeight);
        },
        (error:Response)=>{
          if(error.status === 404){
            alert('NOT FOUND');
          }else{
            alert("there is an unexpected error");
            console.log(error);
          }
        });

        for (let i = 1; i <= 11; i++) {
          this.hlfService.getBlockByHeight('org1','mychannel',i)
          .subscribe(
            response=>{
              this.blocks.push(response.json());
          },
          (error:Response)=>{
            if(error.status === 404){
              alert('NOT FOUND');
            }else{
              alert("there is an unexpected error");
              console.log(error);
            }
          });
        }
  }

  displayedColumnsForChaincode: string[] = ['blockNumber','blockHash','preBlockHash', 'transactionsCount'];

  onChannelSelect(channel){
    console.log(channel);
  }
  
  getAllBlocks(){
    return this.blocks.sort((a,b)=>parseInt(a.blockNumber)-parseInt(b.blockNumber));
  }
  
}
