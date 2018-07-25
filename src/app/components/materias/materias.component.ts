import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../../services/materia.service';
import { Materia } from './materia.model';
import { User } from '../../user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  constructor(
    private materiaSevice: MateriaService,
    private userService: UserService
  ) { }
  materia: Materia;
  materias: any;
  users: User[];
  ngOnInit() {
    this.materia = new Materia();
    this.loadAll();

    this.userService.query()
    .subscribe(res => {
      let ans=[];
      for(let user of res) {
        for(let aut of user['authorities'] ){
          if(aut=="ROLE_ADMIN"){
            ans.push(user);
          }
        }
      }
      this.users = ans;
    });
  }
  loadAll(){
    this.materiaSevice.getMaterias().subscribe(res => {
      this.materias = res;
      return res;
    });
  }
  save(){
    for(let user of this.users){
      if(user.id == this.materia.profesor){
        this.materia.profesor = user;
      }
    }
    console.log(this.materia);
    this.materiaSevice.create(this.materia)
    .subscribe(res => {
      this.loadAll();
      this.materia = new Materia();
      return res;
    });
  }
  confirmDelete(id){
    console.log(id);
    this.materiaSevice.delete(id)
    .subscribe(res => {
      this.loadAll();
      this.materia = new Materia();
      return res;
    })
  }
  
}
