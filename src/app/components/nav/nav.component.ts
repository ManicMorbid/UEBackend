import { Component, OnInit } from '@angular/core';
import {PrincipalService} from '../../services/principal.service';
import {Router} from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private principalService: PrincipalService,
    private loginService: LoginService,
    private router: Router
  ) { }
  account: Account;
  ngOnInit() {
    this.principalService.identity().then((res) =>{
      this.account=res;
    }); 
  }
  isAuthenticated() {
    return this.principalService.isAuthenticated();
  }
  logout(){
    this.loginService.logout();
    this.router.navigate(['']);
  }

}
