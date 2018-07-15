import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { Curso } from './curso.model';
import { MateriaService } from '../../services/materia.service';
import { AmbientesService } from '../../services/ambientes.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(
    private cursoService: CursoService,
    private materiaService: MateriaService,
    private ambientesService: AmbientesService,
    private userService: UserService
  ) { }
  cursos: any;
  curso: Curso;
  ambientes: any;
  materias: any;
  users: any;
  ngOnInit() {
    this.loadAll();
    this.curso = new Curso();
    this.ambientesService.getAmbientes().subscribe(res => {
      this.ambientes = res;
    });
    this.materiaService.getMaterias().subscribe( res => {
      this.materias = res;
    });
    this.userService.query().subscribe(res => {
      this.users = res;
    })

  }
  loadAll(){
    this.cursoService.getCursos()
    .subscribe(res => {
      this.cursos = res;
    })
  }
  confirmDelete(id){
    this.cursoService.delete(id)
      .subscribe(res => {
        this.loadAll();
        this.curso = new Curso();
        return res;
      });
  }
  save(){
    for(let ambiente of this.ambientes){
      if(ambiente.id == this.curso.ambiente){
        this.curso.ambiente = ambiente;
      }
    }
    this.curso.estudiantes = [];
    for(let est of this.curso['estudiante']){
      for(let user of this.users){
        if(est == user.id){
          this.curso.estudiantes.push(user);
        }
      }
    }
    this.curso.materias = [];
    for(let mat of this.curso['materia']){
      for(let materia of this.materias){
        if(mat == materia.id){
          this.curso.materias.push(materia);
        }
      }
    }
    console.log(this.curso);
    this.cursoService.create(this.curso)
    .subscribe(res => {
      this.loadAll();
      this.curso = new Curso();
      return res;
    })
  }
}
