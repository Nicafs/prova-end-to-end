import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { CompanyService } from '@core/services';
import { Company, TableConfig } from '@shared/models';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.sass']
})
export class EmpresaComponent  {
  companyForm: FormGroup;
  
  result: Observable<Company[]>;

  length: number;

  pageSize = 10;

  sortId: string;

  sortDirection: string = 'asc';

  isLoadingResults = false;

  tableConfig: TableConfig[] = [
    { campo: 'acoes', titulo: 'Ações', class: 'tamanho5 txt-center' },
    { campo: 'numero', titulo: 'Número', class: 'tamanho15 txt-center' },
    { campo: 'descricao', titulo: 'Descrição', class: 'tamanho80' },
  ];

  constructor(
    public fb: FormBuilder,
    public cadastroGeralService: CompanyService
  ) {
    this.createForm();
  }

  createForm() {
    // Formulário de adição de parâmetros para a consulta
    this.companyForm = this.fb.group(new Company());
  }

  search({ filters, pageIndex, pageSize, active, direction }) {
    /* TODO: Chama a API passando os parametros pra consulta */
    this.isLoadingResults = true;

    this.result = this.cadastroGeralService
      .find(
        pageIndex,
        pageSize || 0,
        `${active},${direction}`,
        filters,
      )
      .pipe(
        map((result) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;

          if (this.length !== result.totalElements)
            this.length = result.totalElements;

          if (this.pageSize !== pageSize) this.pageSize = pageSize;

          if (this.sortId !== active) this.sortId = active;

          if (this.sortDirection !== direction) this.sortDirection = direction;

          return result.content;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return null;
        }),
      );
  }
}
