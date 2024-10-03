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
export class NotFoundService {
  private _apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  /**
   * Metodo para obtener la data de la pagina de error 404
   * @returns {Observable<Generic>} Retorna un observable con la data de la pagina de error 404
   */
  getData$(): Observable<Generic> {
    const url = `${this._apiUrl}/not-found?populate=*`;
    return this.http.get(url);
  }
}
