import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HlfService } from '../services/hlf.service';

@Component({
  selector: 'block-info',
  templateUrl: './block-info.component.html',
  styleUrls: ['./block-info.component.css']
})
export class BlockInfoComponent implements OnInit {

  block : any;
  constructor(private route: ActivatedRoute,private hlfService:HlfService) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        console.log(params.get('blockNumber'));
        this.hlfService.getBlockByHeight('org1','mychannel',parseInt(params.get('blockNumber'))+1)
        .subscribe(
          response=>{
            this.block = response.json();
        },
        (error:Response)=>{
          if(error.status === 404){
            alert('NOT FOUND');
          }else{
            alert("there is an unexpected error");
            console.log(error);
          }
        });
      });


  }

  displayedColumnsForBlock: string[] = ['transactionID', 'creatorID'];

}
