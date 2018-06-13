import {Routes, RouterModule, Router} from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {LoginComponent} from './components/login/login.component';
import {CalificacionesComponent} from './components/calificaciones/calificaciones.component';


import { AuthGuard } from './AuthGuard'


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
    }
];

export const routing = RouterModule.forRoot(appRoutes);