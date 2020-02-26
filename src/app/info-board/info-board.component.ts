import { Component, OnInit } from '@angular/core';
import { HlfService } from '../services/hlf.service';


@Component({
  selector: 'info-board',
  templateUrl: './info-board.component.html',
  styleUrls: ['./info-board.component.css']
})


export class InfoBoardComponent implements OnInit {

  peerInfo:any;
  constructor(private hlfService:HlfService) { 
    
  }

  async ngOnInit() {
    this.hlfService.getPeerInfo()
    .subscribe(
      response=>{
      this.peerInfo=response.json();
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

  displayedColumnsForChaincode: string[] = ['name', 'version'];
  
}
