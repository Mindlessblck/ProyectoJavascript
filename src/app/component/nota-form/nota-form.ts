import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nota-form',
  standalone: true, // Declarado como standalone
  imports: [CommonModule, FormsModule], // Importados CommonModule y FormsModule
  templateUrl: './nota-form.html'
})
export class NotaFormComponent {
  curso: string = '';
  nota = { nombre: '', nota: 0 };

  constructor(private route: ActivatedRoute, private router: Router) {
    this.curso = this.route.snapshot.paramMap.get('curso') || '';
  }

  guardarNota() {
    console.log("Nota guardada:", this.nota);
    alert(`Nota guardada para ${this.nota.nombre} en ${this.curso}`);
    this.router.navigate([`/cursos/${this.curso}`]);
  }
}
