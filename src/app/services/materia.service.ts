import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import {SERVER_API_URL} from '../app.constats';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(
    private webService: WebService
  ) { }
  getMaterias(): Observable<any> {
    return this.webService.get(SERVER_API_URL+'materias', this.webService.getAuthHeaders())
    .map(res => res.json());
  }
  create(materia):Observable<any>{
    return this.webService.post(SERVER_API_URL+'materias', materia, this.webService.getAuthHeaders())
    .map(res=>res.json());
  }
  delete(id):Observable<any>{
    return this.webService.delete(SERVER_API_URL+'materias/'+id, this.webService.getAuthHeaders())
    .map(res => res);
  }
  getOf(id): Observable<any> {
    return this.webService.get(SERVER_API_URL+'materias', this.webService.getAuthHeaders())
    .map(res => {
      for(let materia of res.json()) {
        if(materia.profesor.id == id)
         return materia;
      }
    })
  }
}
