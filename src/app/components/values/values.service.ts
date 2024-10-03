import { Injectable } from '@angular/core';
import { CreateQueryResult } from '@tanstack/angular-query-experimental';
import { environment } from '../../../environments/environment';
import { AppService } from '../../services/app.service';
import { GenericObject } from '../../shared/models/generic.model';
import { RequestType } from '../../shared/models/request.model';

/**
 *
 */
@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  private _apiUrl = environment.API_URL;

  constructor(private appService: AppService) {}

  /**
   * Metodo para obtener los datos de la API
   * @returns {CreateQueryResult<GenericObject, Error>} Devuelve la respuesta de la API
   */
  getData(): CreateQueryResult<GenericObject, Error> {
    const url = `${this._apiUrl}/value`;
    return this.appService.sendRequest<GenericObject>({
      url,
      type: RequestType.GET,
      params: { populate: '*' },
      propertiesData: ['data', 'attributes']
    });
  }
}
