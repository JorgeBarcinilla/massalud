import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Generic } from '../../shared/models/generic.model';

/**
 *
 */
@Injectable({
  providedIn: 'root'
})
export class EmergencySupportService {
  private _apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  /**
   * Metodo para obtener los datos de la API
   * @returns {Observable<Generic>} Retorna los datos de la API
   */
  getData$(): Observable<Generic> {
    const url = `${this._apiUrl}/emergency-support?populate=*`;
    return this.http.get(url);
  }
}
