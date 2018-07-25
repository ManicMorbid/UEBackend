import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../app.constats';
import { WebService } from './web.service';
import {AccountService} from './account.service';
@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {

  constructor(
    private storageService: StorageService,
    private webService: WebService,
    private accountService: AccountService
  ) { }
  private token = this.storageService.getToken().replace(/['"]+/g, '');
  user: any;
  getCalificacionesOf(id): Observable<any>{
    return this.webService.get(SERVER_API_URL+'calificacions', this.webService.getAuthHeaders(this.token))
    .map((res)=>{
      const list = res.json()
      let ans = [];
      for(let calificacion in list){
        if(list[calificacion]['userestudiante']['id'] == id){
          ans.push(list[calificacion]);
        }
      }
      return ans;
    });
  }
  get(): Observable<any> {
    return this.webService.get(SERVER_API_URL+'calificacions', this.webService.getAuthHeaders())
    .map(res => {
      return res.json();
    });
  }
  create(nota): Observable<any> {
    return this.webService.post(SERVER_API_URL+'calificacions', nota, this.webService.getAuthHeaders())
    .map(res => res); 
  }
}
