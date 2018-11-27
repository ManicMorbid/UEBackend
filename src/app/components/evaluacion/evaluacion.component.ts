import { Component, OnInit } from '@angular/core';
import { EvaluacionService } from '../../services/evaluacion.service';
import { PrincipalService } from '../../services/principal.service';
import { CalificacionesService } from '../../services/calificaciones.service';
import { MateriaService} from '../../services/materia.service';
import { Calificacion } from '../calificaciones/calificacion.model';
@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

  constructor(
    private evaluacionService : EvaluacionService,
    private principalService : PrincipalService,
    private calificacionesService: CalificacionesService,
    private materiaService: MateriaService
  ) { }
  cursos : any;
  evaluacion: any;
  account: Account;
  calificaciones: any;
  todo = [];
  nota = new Calificacion();
  materia: any;
  ngOnInit() {
    this.principalService.identity().then((res) =>{
      this.account=res;
      this.getCursos(res.id);
      this.materiaService.getOf(res.id)
      .subscribe(res => {
        this.materia = res;
      })
    });
    
  }
  getCursos(id){
    this.evaluacionService.getCursos(id)
    .subscribe(res => {
      this.cursos=res;
      this.calificacionesService.get()
      .subscribe(response => {
        for (let curso of this.cursos){
          for (let estudiante of curso.estudiantes){
            let sw = false;
            for(let nota of response){
              if(nota.userestudiante.id === estudiante.id){
                estudiante.nota = nota;
                sw = true;
              }
            }
            if(!sw){
              estudiante['nota'] = {
                'primerbimestrcuantitativo': 0,
                'segundobimestrcuantitativo': 0,
                'tercerbimestrcuantitativo': 0,
                'cuartobimestrcuantitativo': 0,
              }
            }
          }
          this.todo.push(curso);
        }
        console.log(this.todo);
      });
    });
  }
  save(estudiante, curso){
    this.nota.userestudiante = estudiante;
    this.nota.curso = curso;
    this.nota.materia = this.materia;
    return this.calificacionesService.create(this.nota)
    .subscribe(res => res);
  }

}
