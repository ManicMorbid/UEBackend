import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../app.constats';
import { WebService } from './web.service';
import {PrincipalService} from './principal.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private storageService: StorageService,
    private webService: WebService,
    private principal: PrincipalService
  ) { }
  login(account: any): Observable<any> {
    return this.webService.post(SERVER_API_URL + 'authenticate', account, this.webService.getJSONOptions())
      .map(res => {
        if (res.json().id_token)
          this.storageService.postToken(res.json().id_token, account.remmemberMe);
        return res.json();
      }
      );
  }
  logout(){
    return this.storageService.clear();
  }
}
