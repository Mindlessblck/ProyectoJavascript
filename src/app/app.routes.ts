import { Routes } from '@angular/router';
import { ListaNotasComponent } from './component/lista-notas/lista-notas';
import { NotaFormComponent } from './component/nota-form/nota-form';
import { HojaDeEstilo } from './pages/hoja-de-estilo/hoja-de-estilo';
import { MarcosWeb } from './pages/marcos-web/marcos-web';
import { CursoIntegrador } from './pages/curso-integrador/curso-integrador';

export const routes: Routes = [
    { path: 'cursos/:curso', component: ListaNotasComponent },
    { path: 'cursos/:curso/agregar', component: NotaFormComponent },
    { path: '', redirectTo: '/cursos/javascript', pathMatch: 'full' },
    { path: 'hoja-de-estilo', component: HojaDeEstilo},
    { path: 'marcos-web', component:MarcosWeb},
    { path: 'curso-integrador', component:CursoIntegrador}
];
