import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs/Rx';
import { SERVER } from '../server.conf';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  constructor(
    private webService: WebService,
    private storageService: StorageService
  ) { }
  private token = this.storageService.getToken().replace(/['"]+/g, '');
  who():Observable<any>{
    return this.webService.get(SERVER.URL.BASE_SERVER+'account',this.webService.getAuthHeaders(this.token) )
    .map((res) =>{
      //console.log("ASDASDASDASDSAD");
      res.json()
      //console.log(res.json());
      return res.json();
    });
  }
}
