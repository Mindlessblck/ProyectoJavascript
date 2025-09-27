import { Routes } from '@angular/router';
import { ListaNotasComponent } from './component/lista-notas/lista-notas';
import { NotaFormComponent } from './component/nota-form/nota-form';
import { HojaDeEstilo } from './cursos/hoja-de-estilo/hoja-de-estilo';

export const routes: Routes = [
    { path: 'cursos/:curso', component: ListaNotasComponent },
    { path: 'cursos/:curso/agregar', component: NotaFormComponent },
    { path: '', redirectTo: '/cursos/javascript', pathMatch: 'full' },
    {path: 'hoja-de-estilo', component: HojaDeEstilo}
];
