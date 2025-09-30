import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Resultado } from "../../component/resultado/resultado";

@Component({
  selector: 'app-javascript',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Resultado],
  templateUrl: './javascript.html',
  styleUrls: ['./javascript.css']
})
export class Javascript {
  promedioForm: FormGroup;
  porcentajeTotal: number = 0;
  promedioFinal: number = 0;
  estado: string = '';
  mostrarResultado: boolean = false;

  constructor(private fb: FormBuilder) {
    this.promedioForm = this.fb.group({
      pc1: [0], pesoPc1: [0],
      pc2: [0], pesoPc2: [0],
      pc3: [0], pesoPc3: [0],
      ex: [0], pesoEx: [0]
    });

    this.promedioForm.valueChanges.subscribe(() => {
      this.ajustarNotas();
      this.calcularPorcentajeTotal();
    });
  }

  ajustarNotas() {
    ['pc1','pc2','pc3','ex'].forEach(nota => {
      const valor = this.promedioForm.get(nota)?.value;
      if (valor > 20) this.promedioForm.get(nota)?.setValue(20, { emitEvent: false });
    });
  }

  calcularPorcentajeTotal() {
    const { pesoPc1, pesoPc2, pesoPc3, pesoEx } = this.promedioForm.value;
    this.porcentajeTotal = +pesoPc1 + +pesoPc2 + +pesoPc3 + +pesoEx;
  }

  calcularPromedio() {
    if (this.porcentajeTotal !== 100) {
      alert('El porcentaje total debe ser 100%');
      return;
    }

    const { pc1, pc2, pc3, ex, pesoPc1, pesoPc2, pesoPc3, pesoEx } = this.promedioForm.value;
    this.promedioFinal = (pc1*pesoPc1 + pc2*pesoPc2 + pc3*pesoPc3 + ex*pesoEx)/100;
    this.estado = this.promedioFinal >= 12 ? 'Aprobado' : 'Reprobado';
    this.mostrarResultado = true; // muestra el cuadro de resultado
  }
}
