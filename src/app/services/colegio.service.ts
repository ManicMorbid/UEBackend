import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../app.constats';

@Injectable({
  providedIn: 'root'
})
export class ColegioService {

  constructor(
    private webService : WebService
  ) { }
  getColegio(): Observable<any> {
    return this.webService.get(SERVER_API_URL + 'colegios', this.webService.getAuthHeaders())
    .map(res => {
      console.log(res.json());
      return res.json()}
    );
  }
}
