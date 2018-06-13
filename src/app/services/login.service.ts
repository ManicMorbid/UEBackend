import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs/Rx';
import { SERVER } from '../server.conf';
import { WebService } from '../services/web.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private storageService: StorageService,
    private webService: WebService
  ) { }
  login(account: any): Observable<any> {
    return this.webService.post(SERVER.URL.BASE_SERVER + 'authenticate', account, this.webService.getJSONOptions())
      .map(res => {
        if (res.json().id_token)
          this.storageService.postToken(res.json().id_token, account.remmemberMe);
        return res.json();
      }
      );
  }
}
