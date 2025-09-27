import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Resultado } from "../../resultado/resultado/resultado";

@Component({
  selector: 'app-hoja-de-estilo',
  imports: [FormsModule, CommonModule, Resultado],
  templateUrl: './hoja-de-estilo.html',
  styleUrls: ['./hoja-de-estilo.css']
})
export class HojaDeEstilo {
 curso = 'Hoja de estilo en cascada avanzado';

  notas = [
    { nombre: 'PC1', valor: 0, porcentaje: 0 },
    { nombre: 'PC2', valor: 0, porcentaje: 0 },
    { nombre: 'PC3', valor: 0, porcentaje: 0 },
    { nombre: 'Examen Final', valor: 0, porcentaje: 0 }
  ];

  promedio: number = 0;
  estado: string = '';

  calcularPromedio() {
    let suma = 0;
    let totalPorcentajes = 0;

    this.notas.forEach(n => {
      suma += n.valor * (n.porcentaje / 100);
      totalPorcentajes += n.porcentaje;
    });

    if (totalPorcentajes === 100) {
      this.promedio = suma;
      this.estado = this.promedio >= 11 ? 'Aprobado' : 'Desaprobado';
    } else {
      this.promedio = 0;
      this.estado = '⚠️ La suma de los porcentajes debe ser 100';
    }
  }
}
