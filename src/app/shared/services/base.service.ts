import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';

import CommonParams from 'src/app/shared/common-params';

export abstract class BaseService<T> {
  abstract API_URL: string;
  BASE_URL: string;

  // Suporte para o IE11
  httpOptions = {
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Expires: '0'
    })
  };

  constructor(@Inject('http') public http: HttpClient) {
    this.BASE_URL = CommonParams.BASE_URL;
  }

  prepareParams(filter: any): string {
    const quote = '?';

    if (!filter) { return quote; }

    const paramsList = Object.keys(filter)
      .map((param) => this.returnArrayParams(param.toString(), filter[param]))
      .join('&');

    return quote + paramsList;
  }

  returnArrayParams(name: string, fields: any): string {
    let textArray = '';
    let caracterLigacao = '';

    if (Array.isArray(fields)) {
      fields.forEach(valor => {
        textArray += caracterLigacao + name  + '=' + valor;
        caracterLigacao = '&';
      });
      return textArray;
    }
    return name  + '=' + encodeURIComponent(fields);
  }

  get = (filter?: any): Observable<any> => this.http.get<any>(this.getApiUrl() + this.prepareParams(filter));

  getById = (id: number): Observable<T> => this.http.get<T>(`${this.getApiUrl()}/${id}`, this.httpOptions);

  save = (model: T): Observable<any> => this.http.post<any>(this.getApiUrl(), model);

  remove = (id: number): Observable<any> => this.http.delete<any>(`${this.getApiUrl()}/${id}`);

  edit = (model: T): Observable<any> => this.http.put<any>(this.getApiUrl(), model);

  getApiUrl = () => `${this.BASE_URL}/${this.API_URL}`;
}
