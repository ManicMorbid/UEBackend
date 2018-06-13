import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class StorageService {

  constructor(
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
  ) { }

  getToken():string{
     return window.sessionStorage.getItem('ng2-webstorage|token') || window.localStorage.getItem('ng2-webstorage|token');
  }
  postToken(token: string, rememberMe: boolean){
    if(rememberMe)
      this.localStorage.store('token', token);
    else
      this.sessionStorage.store('token', token);
  }
  isExpiredToken():boolean{
    return tokenNotExpired();
  }
}