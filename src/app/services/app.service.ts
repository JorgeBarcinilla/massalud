import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateQueryResult, injectQuery } from '@tanstack/angular-query-experimental';
import { lastValueFrom, map } from 'rxjs';
import { Generic } from '../shared/models/generic.model';
import { AppParams, RequestType, RequestWithBody, RequestWithParams } from '../shared/models/request.model';

/**
 *
 */
@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _http = inject(HttpClient);
  private _headers = new HttpHeaders();
  private _params = new HttpParams();

  constructor() {}

  /**
   * Metodo general para enviar peticiones al servidor.
   * @param {RequestWithBody<unknown> | RequestWithParams} req - Objeto con la información de la petición.
   * @returns {CreateQueryResult<unknown, Error>} - Respuesta de la petición.
   */
  sendRequest<T, U = object>(req: RequestWithBody<U> | RequestWithParams): CreateQueryResult<T, Error> {
    this.overwriteParams(req.params);
    this.overwriteHeaders(req.headers);
    return injectQuery(() => ({
      queryKey: [req.url + '-' + JSON.stringify(req.params)],
      queryFn: () => {
        switch (req.type) {
          case RequestType.POST:
            return lastValueFrom(
              this._http.post<T>(req.url, req.body, { headers: this._headers, params: this._params })
            );
          case RequestType.PUT:
            return lastValueFrom(
              this._http.put<T>(req.url, req.body, { headers: this._headers, params: this._params })
            );
          case RequestType.DELETE:
            return lastValueFrom(this._http.delete<T>(req.url, { headers: this._headers, params: this._params }));
          default:
            return lastValueFrom(
              this._http.get<T>(req.url, { headers: this._headers, params: this._params }).pipe(
                map((data) => {
                  if (req.propertiesData) {
                    let newData = data as Generic;
                    req.propertiesData.forEach((property) => {
                      newData = newData[property];
                    });
                    return newData;
                  } else {
                    return data;
                  }
                })
              )
            );
        }
      }
    }));
  }

  /**
   * Metodo que se encarga de sobreescribir los params de la petición.
   * @param {object | undefined} params - Parametros de la petición.
   */
  private overwriteParams(params: AppParams): void {
    let newParams = new HttpParams();
    if (params) {
      for (const key in params) {
        const value = params[key];
        if (Object.prototype.hasOwnProperty.call(params, key) && value) {
          newParams = newParams.set(key, value);
        }
      }
      this._params = newParams;
    } else {
      this._params = newParams;
    }
  }
  /**
   * Metodo que se encarga de sobreescribir los headers de la petición.
   * @param {object | undefined} headers - Parametros de la petición.
   */
  private overwriteHeaders(headers: Record<string, string> | undefined): void {
    if (headers) {
      let newHeaders = new HttpHeaders({
        Accept: 'application/json'
      });
      for (const key in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, key)) {
          newHeaders = newHeaders.set(key, headers[key]);
        }
      }
      this._headers = newHeaders;
    }
  }
}
