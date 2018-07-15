import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account.service';
import { PrincipalService } from '../../services/principal.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private accountService : AccountService,
    private principalService : PrincipalService
  ) { }
  account: Account
  ngOnInit() {
    this.principalService.identity().then((res) =>{
      this.account=res;
    }); 
  }
  isAuthenticated() {
    return this.principalService.isAuthenticated();
  }
}
