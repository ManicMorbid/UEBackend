import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL} from '../app.constats';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  constructor(
    private webService: WebService,
    private storageService: StorageService,
    private http: HttpClient
  ) { }
  get(): Observable<HttpResponse<Account>> {
    //return this.http.get<Account>(SERVER_API_URL + 'account', {observe : 'response'});
    return this.webService.get(SERVER_API_URL + 'account', this.webService.getAuthHeaders())
    .map(res => res.json());
  }
  save(account: any): Observable<HttpResponse<any>> {
    return this.http.post(SERVER_API_URL + 'api/account', account, {observe: 'response'});
  }


  who():Observable<any>{
    return this.webService.get(SERVER_API_URL+'account',this.webService.getAuthHeaders() )
    .map((res) =>{
      //console.log("ASDASDASDASDSAD");
      res.json()
      //console.log(res.json());
      return res.json();
    });
  }
}
