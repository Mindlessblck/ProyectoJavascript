import { Routes } from '@angular/router';

import { HojaDeEstilo } from './pages/hoja-de-estilo/hoja-de-estilo';
import { MarcosWeb } from './pages/marcos-web/marcos-web';
import { CursoIntegrador } from './pages/curso-integrador/curso-integrador';
import { Javascript } from './pages/javascript/javascript';

export const routes: Routes = [
    { path: '', redirectTo: '/cursos/javascript', pathMatch: 'full' },
    { path: 'hoja-de-estilo', component: HojaDeEstilo},
    { path: 'marcos-web', component:MarcosWeb},
    { path: 'curso-integrador', component:CursoIntegrador},
    { path: 'Javascript', component:Javascript}
];
