import { Component, OnInit } from '@angular/core';
import { InscripcionService } from '../../services/inscripcion.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  constructor(
    private inscripcionService: InscripcionService
  ) { }
  user: any;
  ngOnInit() {
    this.user ={}
  }
  save () {
    console.log(this.user);
    return this.inscripcionService.create(this.user)
    .subscribe( res => res);
  }
}
