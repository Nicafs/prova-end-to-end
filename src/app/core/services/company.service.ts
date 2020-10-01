import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  save(companyForm, apiRoute: string) {
    if (companyForm.id) {
      return this.update(companyForm);
    }
    return this.create(companyForm);
  }

  // Busca as informações e retuna os resultados paginados.
  find(
    form: any,
    pageIndex,
    pageSize,
    sort: string,
  ): Observable<any> {
    let filters = '';
    if (form) {
      Object.keys(form).map((filter) => {
        if (
          form[filter] ||
          (typeof form[filter] === 'boolean' && form[filter] != null)
        ) {
          filters += `&${filter}=${form[filter]}`;
        }
      });
    }

    return this.http
      .get<any>(
        `${environment.api}/v1/company?size=${pageSize}&page=${pageIndex}&sort=${sort}${filters}`,
      )
      .pipe(take(1));
  }

  // Atualizar a informação
  update(companyForm): Observable<any> {
    return this.http
      .put<any>(`${environment.api}/v1/company`, companyForm)
      .pipe(take(1));
  }

  // Criar uma informação
  create(companyForm): Observable<any> {
    // Deletando o campo ID pois não pode ser enviado na requisição de criação de um registro.
    delete companyForm.id;
    return this.http
      .post<any>(`${environment.api}/v1/company`, companyForm)
      .pipe(take(1));
  }

  // Encontre a informação pelo seu ID
  findById(id): Observable<any> {
    return this.http
      .get<any>(`${environment.api}/v1/company/${id}`)
      .pipe(take(1));
  }

  // Deletar uma informação
  delete(id): Observable<any> {
    return this.http
      .delete<any>(`${environment.api}/v1/company/${id}`)
      .pipe(take(1));
  }
}
