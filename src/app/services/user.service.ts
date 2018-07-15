import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../app.constats';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private webService: WebService
  ) { }
  query(): Observable<any>{
    return this.webService.get(SERVER_API_URL+'users', this.webService.getAuthHeaders())
    .map(res=> res.json());
  }
}
