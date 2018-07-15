import { Component, OnInit } from '@angular/core';
import {AmbientesService} from '../../services/ambientes.service';
import {Ambiente} from './ambiente.model';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-ambientes',
  templateUrl: './ambientes.component.html',
  styleUrls: ['./ambientes.component.css']
})
export class AmbientesComponent implements OnInit {

  constructor(
    private ambientesServices : AmbientesService
  ) { }

  ngOnInit() {
    this.loadAll();
    this.isSaving = false;
    this.ambiente = new Ambiente();
  }
  ambientes: any;
  ambiente: Ambiente;
  isSaving: boolean;
  loadAll(){
    return this.ambientesServices.getAmbientes()
    .subscribe(res => {
      this.ambientes=res;
    });
  }
  save(){
    this.isSaving = true;
    this.ambientesServices.create(this.ambiente).subscribe(res => {
      this.loadAll();
      this.ambiente=new Ambiente();
      return res;
    });
  }
  confirmDelete(id: number) {
    this.ambientesServices.delete(id).subscribe((response) => {
      this.loadAll();
      return response;
    });
  }
}
