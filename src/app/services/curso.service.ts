import { Injectable } from '@angular/core';
import { SERVER_API_URL } from '../app.constats';
import { WebService } from './web.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(
    private webService: WebService
  ) { }
  getCursos():Observable<any>{
    return this.webService.get(SERVER_API_URL+'cursos', this.webService.getAuthHeaders())
    .map(res => res.json());
  }
  delete(id): Observable<any> {
    return this.webService.delete(SERVER_API_URL+'cursos/'+id, this.webService.getAuthHeaders())
    .map(res => res);
  }
  create(curso): Observable<any> {
    return this.webService.post(SERVER_API_URL+'cursos',curso, this.webService.getAuthHeaders())
    .map(res => res);
  }
  getCursoOf(id){
    return this.webService.get(SERVER_API_URL+'cursos', this.webService.getAuthHeaders())
    .map(res => {
      for(let curso of res.json()){
        for(let estudiante of curso.estudiantes){
          if(estudiante.id == id){
            return curso;
          }
        }
      }
      return res.json()
    });
  }
}
