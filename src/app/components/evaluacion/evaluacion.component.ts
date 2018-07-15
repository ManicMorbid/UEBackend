import { Component, OnInit } from '@angular/core';
import { EvaluacionService } from '../../services/evaluacion.service';
import { PrincipalService } from '../../services/principal.service';
@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

  constructor(
    private evaluacionService : EvaluacionService,
    private principalService : PrincipalService
  ) { }
  cursos : any;
  evaluacion: any;
  account: Account;
  ngOnInit() {
    this.principalService.identity().then((res) =>{
      this.account=res;
      this.getCursos(res.id);
    }); 
    
  }
  getCursos(id){
    this.evaluacionService.getCursos(id)
    .subscribe(res => {
      this.cursos=res;
      console.log(res);
      return res;
    });
  }

}
