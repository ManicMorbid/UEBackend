import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

//import { User } from '../User';
import { FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import 'rxjs/add/operator/switchMap';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginAccount: any;
  error: string;
  errorEmailExists: string;
  errorUserExists: string;
  success: boolean;


  constructor(
    private loginService: LoginService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.loginAccount = {};
  }


  login(): void {
    this.loginService.login(this.loginAccount)
      .subscribe(() => {
        this.success = true;
        console.log("BIen hecho puerco");
      }, (response) => this.processError(response));
  }


  private processError(response) {
    this.success = null;
    if (response.status === 401) {
      this.errorUserExists = 'ERROR';
      swal({
        title: 'Error!',
        text: 'Credenciales no validas',
        confirmButtonText: 'Aceptar'
      });
    } else {
      this.error = 'ERROR';
    }
  }
}