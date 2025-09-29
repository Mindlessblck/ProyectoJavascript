import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  imports: [CommonModule],
  templateUrl: './resultado.html',
  styleUrl: './resultado.css'
})
export class Resultado {
  @Input() promedio: number = 0;
  @Input() estado: string = '';
}
