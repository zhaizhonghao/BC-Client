import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HlfService {
  
  private url : string;
  private httpOptions : any;
  constructor(private http:HttpClient) {
    //TODO the url need to be flexible
    this.url = 'http://72.72.99.85:3000/api';
    //this.url = 'http://localhost:3000/api';
    this.httpOptions= {
      headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })
     };
   }

   getPeerInfo(){
      //return this.http.get('http://72.72.99.85:3000/api/peerInfo/org1/peer0.org1.example.com');
      return this.http.get(this.appendToUrl('peerInfo','org1','peer0.org1.example.com'));
   }

   getBlockHeight(orgName,channelName){
     return this.http.get(this.appendToUrl('channel','getLatestBlckHeight',orgName,channelName));
   }

   getBlockByHeight(orgName,channelName,height){
     ///api/channel/getBlockbyHeight/:orgName/:channelName/:height'
     return this.http.get(this.appendToUrl('channel','getBlockbyHeight',orgName,channelName,height));
   }

   getBlockByHash(orgName,channelName,txHash){
     //http://72.72.99.85:3000/api/channel/getTransactionById/org1/mychannel/a2c886f41906cc46a276b4a1a6cc9763c68779ee5899a123f05347c9051d0add
     return this.http.get(this.appendToUrl('channel','getTransactionById',orgName,channelName,txHash));
   }

   installChaincode(body){
     console.log(body);
     //TODO unable to send the body
    return this.http.post(this.appendToUrl('channel','installChaincode'),body,this.httpOptions);
   }

   instantiateChaincode(body){
    return this.http.post(this.appendToUrl('channel','instantiateChaincode'),body,this.httpOptions);
   }

   getInstantiatedChaincodes(orgName,channelName){
     ///api/channel/getChaincodesInfo/:orgName/:channelName
     return this.http.get(this.appendToUrl('channel','getChaincodesInfo',orgName,channelName));
   }

   private appendToUrl(...args){
      let urlFull = this.url;
      for (let i = 0; i < args.length; i++) {
        urlFull = urlFull + '/' + args[i];
      }
      return urlFull;
   }
}
