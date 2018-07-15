import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { StorageService } from './storage.service';
import { SERVER_API_URL } from '../app.constats';
import { Observable } from 'rxjs/Rx';
import {AccountService} from './account.service';


@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {

  constructor(
    private webService : WebService,
    private storageService: StorageService,
    private accountService : AccountService
  ) { }
  getCursos(id): Observable<any>{
    console.log(id);
    return this.webService.get(SERVER_API_URL+'cursos', this.webService.getAuthHeaders())
    .map(res => {
      console.log(res.json());
      const cursos = res.json();
      let ans=[];
      for(let curso of cursos){
        for(let materia of curso.materias){
          if(materia['profesor']['id']==id){
            ans.push(curso);
            break;
          }
        }
      }
      return ans;
    });
  }
}
