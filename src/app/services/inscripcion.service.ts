import { Injectable } from '@angular/core';
import {WebService} from './web.service';
import { Observable } from 'rxjs/Rx';
import {SERVER_API_URL} from '../app.constats';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor(
    private webService: WebService
  ) { }
  create(user):Observable<any> {
    user['login'] = user['firstName'] + user['lastName'];
    user['password'] = user['ru'];
    user['email'] = user['login']+"@gmail.com";
    return this.webService.post(SERVER_API_URL+'register', user, this.webService.getAuthHeaders())
    .map(res => res);
  }
}
