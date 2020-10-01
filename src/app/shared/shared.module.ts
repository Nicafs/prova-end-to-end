import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@material';
import { FlexLayoutModule } from '@angular/flex-layout';


import { ResultadoComponent } from './components/resultado/resultado.component';

import { MatPaginatorIntl } from '@angular/material/paginator';
import {
  MatFormFieldDefaultOptions,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import {
  MatExpansionPanelDefaultOptions,
  MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,
} from '@angular/material/expansion';

@NgModule({
  declarations: [ResultadoComponent],
  imports: [
    /* angular */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    /* 3rd bibliotecas de terceiros (components) */
    MaterialModule,
  ],
  exports: [
    /* angular */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
     /* 3rd bibliotecas de terceiros (components) */
     MaterialModule,
     FlexLayoutModule,

     /* Componentes Customizados Próprios */
     ResultadoComponent
  ]
})
export class SharedModule { }
