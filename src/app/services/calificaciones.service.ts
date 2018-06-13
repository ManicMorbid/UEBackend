import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs/Rx';
import { SERVER } from '../server.conf';
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
  getCalificaciones(): Observable<any>{
    return this.webService.get(SERVER.URL.BASE_SERVER+'calificacions', this.webService.getAuthHeaders(this.token))
    .map((res)=>{
      const list = res.json()
      let ans = [];
      this.accountService.who().subscribe((res)=>{
        for(let calificacion in list){
          if(list[calificacion]['userestudiante']['id']==res['id']){
            ans.push(list[calificacion]);
          }
        }
        return ans;
      });
      return ans;  
    });
  }
}
