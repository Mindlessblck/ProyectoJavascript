import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoNota'
})
export class EstadoNotaPipe implements PipeTransform {
  transform(value: number): string {
    return value >= 11 ? 'Aprobado ✅' : 'Desaprobado ❌';
  }
}
