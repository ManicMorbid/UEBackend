import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registro.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    private registroService: RegistroService
  ) { }
  user: any;
  ngOnInit() {
    this.user = {};
  }
  save(){
    return this.registroService.create(this.user)
    .subscribe(res => res);
  }

}
