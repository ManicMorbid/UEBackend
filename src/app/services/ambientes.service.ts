import { Injectable } from '@angular/core';
import {StorageService} from './storage.service';
import {WebService} from './web.service';
import { Observable } from 'rxjs/Rx';
import {SERVER_API_URL} from '../app.constats';

@Injectable({
  providedIn: 'root'
})
export class AmbientesService {

  constructor(
    private webService : WebService,
    private storageService : StorageService
  ) { }
  private token = this.storageService.getToken().replace(/['"]+/g, '');

  getAmbientes():Observable<any> {
    return this.webService.get(SERVER_API_URL+'ambientes', this.webService.getAuthHeaders(this.token))
    .map(res => {
      return res.json();
    });
  }
  create(ambiente: any):Observable<any> {
    return this.webService.post(SERVER_API_URL + 'ambientes', ambiente, this.webService.getAuthHeaders()).map(res => res);
  }
  delete(id): Observable<any> {
    return this.webService.delete(SERVER_API_URL + 'ambientes/'+id, this.webService.getAuthHeaders())
    .map((res) => res);
  }
}
