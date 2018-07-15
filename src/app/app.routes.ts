import {Routes, RouterModule, Router} from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {LoginComponent} from './components/login/login.component';
import {CalificacionesComponent} from './components/calificaciones/calificaciones.component';
import {EvaluacionComponent} from './components/evaluacion/evaluacion.component';

import { AuthGuard } from './AuthGuard'
import { AmbientesComponent } from './components/ambientes/ambientes.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { MateriasComponent } from './components/materias/materias.component';
import { CursosComponent } from './components/cursos/cursos.component';


export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: IndexComponent
    },{
        path: 'login',
        component: LoginComponent
    },{
        path: 'calificaciones',
        component: CalificacionesComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'evaluacion',
        component: EvaluacionComponent
    }, {
        path: 'ambientes',
        component: AmbientesComponent
    }, {
        path: 'presentacion',
        component: PresentacionComponent
    }, {
        path: 'materias',
        component: MateriasComponent
    }, {
        path: 'cursos',
        component: CursosComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);