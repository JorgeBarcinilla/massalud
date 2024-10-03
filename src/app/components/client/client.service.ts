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
export class ClientService {
  private _apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  /**
   * Metodo para obtener la informacion de los clientes
   * @returns {Observable<Generic>} Retorna la informacion de los clientes
   */
  getData$(): Observable<Generic> {
    const url = `${this._apiUrl}/client?populate=deep`;
    return this.http.get(url);
  }
}
