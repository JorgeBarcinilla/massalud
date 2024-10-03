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
export class ServicesService {
  private _apiUrl = environment.API_URL;

  constructor(private appService: AppService) {}

  /**
   * Metodo para obtener los datos de la API
   * @returns {CreateQueryResult<GenericObject[], Error>} Retorna los datos de la API
   */
  getData(): CreateQueryResult<GenericObject[], Error> {
    const url = `${this._apiUrl}/services-posts`;
    return this.appService.sendRequest<GenericObject[]>({
      url,
      type: RequestType.GET,
      params: { populate: 'deep', 'sort[0]': 'id:desc' },
      propertiesData: ['data']
    });
  }
}
