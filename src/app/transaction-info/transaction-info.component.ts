import { Component, OnInit } from '@angular/core';
import { HlfService } from '../services/hlf.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'transaction-info',
  templateUrl: './transaction-info.component.html',
  styleUrls: ['./transaction-info.component.css']
})
export class TransactionInfoComponent implements OnInit {
  transaction : any;
  
  constructor(private route: ActivatedRoute,private hlfService:HlfService) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      console.log(params.get('transactionID'));
      this.hlfService.getBlockByHash('org1','mychannel',params.get('transactionID'))
      .subscribe(
        response=>{
          this.transaction = response.json();
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

}
