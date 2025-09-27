import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { EstadoNotaPipe } from '../../pipes/estado-nota-pipe'; // Asegúrate de que el nombre del archivo sea correcto

@Component({
  selector: 'app-lista-notas',
  standalone: true,
  imports: [CommonModule, TitleCasePipe, EstadoNotaPipe], // Asegúrate de incluir el pipe aquí
  templateUrl: './lista-notas.html'
})
export class ListaNotasComponent {
  curso: string = '';
  estudiantes = [
    { nombre: 'Ana', nota: 18 },
    { nombre: 'Luis', nota: 10 },
    { nombre: 'María', nota: 14 }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.curso = this.route.snapshot.paramMap.get('curso') || '';
  }

  agregarNota() {
    this.router.navigate([`/cursos/${this.curso}/agregar`]);
  }
}
