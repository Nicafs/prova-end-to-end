import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedorRoutingModule } from './fornecedor-routing.module';
import { FornecedorComponent } from './fornecedor.component';
import { FornecedorCrudComponent } from './fornecedor-crud/fornecedor-crud.component';


@NgModule({
  declarations: [FornecedorComponent, FornecedorCrudComponent],
  imports: [
    CommonModule,
    FornecedorRoutingModule
  ]
})
export class FornecedorModule { }
