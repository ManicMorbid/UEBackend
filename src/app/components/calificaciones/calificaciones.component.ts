import { Component, OnInit } from '@angular/core';
import {CalificacionesService} from '../../services/calificaciones.service';


@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.css']
})
export class CalificacionesComponent implements OnInit {

  constructor(
    private calificacionesService : CalificacionesService
  ) { }
  notas: any;

  calificaciones : any;
  ngOnInit() {
    this.getCalificaciones();
  }
  getCalificaciones(){
    this.calificacionesService.getCalificaciones()
    .subscribe((res)=>{
      this.notas = res;
    });
  }
}
