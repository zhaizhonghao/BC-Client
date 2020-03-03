import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HlfService {
  
  private url : string;
  constructor(private http:Http) {
    this.url = 'http://72.72.99.85:3000/api';
   }

   getPeerInfo(){
      return this.http.get('http://72.72.99.85:3000/api/peerInfo/org1/peer0.org1.example.com');
   }

   getBlockHeight(orgName,channelName){
     return this.http.get(this.appendToUrl('channel','getLatestBlckHeight',orgName,channelName));
   }

   getBlockByHeight(orgName,channelName,height){
     ///api/channel/getBlockbyHeight/:orgName/:channelName/:height'
     return this.http.get(this.appendToUrl('channel','getBlockbyHeight',orgName,channelName,height));
   }

   getBlockByHash(){
     
   }


   private appendToUrl(...args){
      let urlFull = this.url;
      for (let i = 0; i < args.length; i++) {
        urlFull = urlFull + '/' + args[i];
      }
      return urlFull;
   }
}
