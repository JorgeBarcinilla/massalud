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
export class BlogService {
  private _apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  /**
   * Metodo para obtener los datos de la API
   * @returns {Observable<Generic>} Retorna los datos de la API
   */
  getData$(): Observable<Generic> {
    const url = `${this._apiUrl}/blog-posts?populate=deep&sort[0]=id%3Adesc`;
    return this.http.get(url);
  }
}