import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'curso-integrador',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './curso-integrador.html',
  styleUrls: ['./curso-integrador.css']
})
export class CursoIntegrador {
  notaForm: FormGroup;
  resultado: number | null = null;
  totalPorcentaje: number = 0;

  notas = [
    { nombre: 'PC1', nota: 'pc1', peso: 'pesoPc1' },
    { nombre: 'PC2', nota: 'pc2', peso: 'pesoPc2' },
    { nombre: 'PC3', nota: 'pc3', peso: 'pesoPc3' },
    { nombre: 'Examen Final', nota: 'examenFinal', peso: 'pesoExamen' },
  ];

  constructor(private fb: FormBuilder) {
    this.notaForm = this.fb.group({
      pc1: [0, [Validators.required, Validators.min(0), Validators.max(20)]],
      pesoPc1: [0, [Validators.required, Validators.min(0), Validators.max(100)]],

      pc2: [0, [Validators.required, Validators.min(0), Validators.max(20)]],
      pesoPc2: [0, [Validators.required, Validators.min(0), Validators.max(100)]],

      pc3: [0, [Validators.required, Validators.min(0), Validators.max(20)]],
      pesoPc3: [0, [Validators.required, Validators.min(0), Validators.max(100)]],

      examenFinal: [0, [Validators.required, Validators.min(0), Validators.max(20)]],
      pesoExamen: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
    });

    // Escuchar cambios en los pesos para actualizar totalPorcentaje
    this.notaForm.valueChanges.subscribe(val => {
      this.totalPorcentaje = (val.pesoPc1 || 0) + (val.pesoPc2 || 0) + (val.pesoPc3 || 0) + (val.pesoExamen || 0);
    });
  }

  limitarNota(campo: string) {
    const valor = this.notaForm.get(campo)?.value;
    if (valor > 20) {
      this.notaForm.get(campo)?.setValue(20, { emitEvent: false });
    } else if (valor < 0) {
      this.notaForm.get(campo)?.setValue(0, { emitEvent: false });
    }
  }

  calcularPromedio(): void {
    if (this.totalPorcentaje !== 100) {
      alert("El total de los pesos debe ser 100%");
      this.resultado = null;
      return;
    }

    const { pc1, pesoPc1, pc2, pesoPc2, pc3, pesoPc3, examenFinal, pesoExamen } = this.notaForm.value;

    this.resultado = ((pc1 * pesoPc1 + pc2 * pesoPc2 + pc3 * pesoPc3 + examenFinal * pesoExamen) / 100);
  }
}
