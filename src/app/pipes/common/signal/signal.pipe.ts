import { Pipe, PipeTransform, Signal } from '@angular/core';

/**
 * Pipe para llamar funciones en el template
 */
@Pipe({
  name: 'callSignal',
  standalone: true,
  pure: false
})
export class SignalPipe implements PipeTransform {
  /**
   * Metodo hereado de PipeTransform
   * @param {Signal<unknown>} signal - Señal a transformar
   * @returns {unknown} - Señal transformada
   */
  transform<T>(signal: Signal<T | undefined>): T | undefined {
    return signal();
  }
}
