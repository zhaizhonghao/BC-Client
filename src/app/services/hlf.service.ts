import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HlfService {

  constructor(private http:Http) {

   }

   getPeerInfo(){
      return this.http.get('http://72.72.99.85:3000/api/peerInfo/org1/peer0.org1.example.com');
   }
}
