import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from "angular2-materialize";
import { routing } from './app.routes';
import { Ng2Webstorage } from 'ngx-webstorage';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { AuthGuard } from './AuthGuard';
import { HttpClientModule } from '@angular/common/http'; 



import { LoginService } from './services/login.service';
import { StorageService } from './services/storage.service';
import { WebService } from './services/web.service';
import { LoadingMaskService } from './services/loadingmask.service';
import { CalificacionesService } from './services/calificaciones.service';
import {HasAnyAuthorityDirective} from './services/has-any-authority.directive';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CalificacionesComponent } from './components/calificaciones/calificaciones.component';
import { AvisosComponent } from './components/avisos/avisos.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { NavComponent } from './components/nav/nav.component';
import { IndexComponent } from './components/index/index.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { AmbientesComponent } from './components/ambientes/ambientes.component';
import { MateriasComponent } from './components/materias/materias.component';
import { AmbientesService } from './services/ambientes.service';
import { MateriaService } from './services/materia.service';
import { CursosComponent } from './components/cursos/cursos.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { RegistroComponent } from './components/registro/registro.component';
//import { HttpClient } from 'selenium-webdriver/http';


export function httpServiceFactory(backend: XHRBackend, defaultOptions: RequestOptions, loadingMaskService: LoadingMaskService) {
  return new WebService(backend, defaultOptions, loadingMaskService);
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalificacionesComponent,
    AvisosComponent,
    EvaluacionComponent,
    NavComponent,
    IndexComponent,
    PresentacionComponent,
    FooterComponent,
    AmbientesComponent,
    MateriasComponent,
    CursosComponent,
    InscripcionComponent,
    HasAnyAuthorityDirective,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    routing,
    FormsModule,
    HttpModule,
    Ng2Webstorage,
    HttpClientModule
  ],
  providers: [
    LoginService,
    StorageService,
    LoadingMaskService,
    WebService,
    {
      provide: WebService,
      useFactory: httpServiceFactory,
      deps: [XHRBackend, RequestOptions, LoadingMaskService]
    },
    AuthGuard,
    CalificacionesService,
    AmbientesService,
    MateriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
