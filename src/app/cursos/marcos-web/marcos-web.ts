import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marcos-web',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './marcos-web.html',
  styleUrls: ['./marcos-web.css']
})
export class MarcosWeb {
  nombresNotas = ['APF1', 'APF2', 'APF3', 'PROY FINAL'];

  notas = [
    { valor: 0, porcentaje: 0 },
    { valor: 0, porcentaje: 0 },
    { valor: 0, porcentaje: 0 },
    { valor: 0, porcentaje: 0 }
  ];

  resultado: number = 0;
  estado: string = '';

  get porcentajeTotal(): number {
    return this.notas.reduce((total, nota) => total + nota.porcentaje, 0);
  }

  get porcentajeValido(): boolean {
    return this.porcentajeTotal === 100;
  }

  limitarValores(indice: number) {
    const nota = this.notas[indice];
    if (nota.valor < 0) nota.valor = 0;
    if (nota.valor > 20) nota.valor = 20;

    if (nota.porcentaje < 0) nota.porcentaje = 0;
    if (nota.porcentaje > 100) nota.porcentaje = 100;
  }

  calcularPromedio() {
    if (!this.porcentajeValido) {
      alert('La suma de los porcentajes debe ser exactamente 100%.');
      return;
    }

    for (const nota of this.notas) {
      if (nota.valor < 0 || nota.valor > 20) {
        alert('Todas las notas deben estar entre 0 y 20.');
        return;
      }
    }

    let total = 0;
    for (const nota of this.notas) {
      total += (nota.valor * nota.porcentaje) / 100;
    }

    this.resultado = parseFloat(total.toFixed(2));
    this.estado = this.resultado >= 12 ? 'Aprobado' : 'Desaprobado';
  }

  resetear() {
    this.notas = [
      { valor: 0, porcentaje: 0 },
      { valor: 0, porcentaje: 0 },
      { valor: 0, porcentaje: 0 },
      { valor: 0, porcentaje: 0 }
    ];
    this.resultado = 0;
    this.estado = '';
  }
}
