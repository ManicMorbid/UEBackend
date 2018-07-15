import { Component, OnInit } from '@angular/core';
import {CalificacionesService} from '../../services/calificaciones.service';
import {AccountService} from '../../services/account.service';
import {PrincipalService} from '../../services/principal.service';
import { CursoService } from '../../services/curso.service';
import { Curso} from '../cursos/curso.model';
import { ColegioService } from '../../services/colegio.service';
import { Colegio } from '../../colegio.model';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

  constructor(
    private calificacionesService : CalificacionesService,
    private accountService: AccountService,
    private principalService: PrincipalService,
    private cursoService: CursoService,
    private colegioService: ColegioService
  ) { }
  notas: any;
  promedios: any;
  calificaciones : any;
  user: any;
  date: string;
  account: Account;
  curso: any;
  colegio: any;
  ngOnInit() {
    this.colegioService.getColegio().subscribe(res => {
      console.log(res);
      this.colegio = res;
    })
    this.principalService.identity().then((response) =>{
      this.account=response;
      this.cursoService.getCursoOf(this.account.id).subscribe(res => {
        console.log(res);
        this.curso = res;
      });
      this.getCalificacionesOf(this.account.id);
    }); 

    this.date = new Date().toLocaleDateString();
  }
  getCalificacionesOf(id){
    this.calificacionesService.getCalificacionesOf(id)
    .subscribe((res)=>{     
      this.notas = res;
    });
  }
}
