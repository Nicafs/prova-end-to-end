import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CompanyService, MessagesService } from '@core/services';
import { Company } from '@shared/models';

@Component({
  selector: 'app-empresa-crud',
  templateUrl: './empresa-crud.component.html',
  styleUrls: ['./empresa-crud.component.sass']
})
export class EmpresaCrudComponent implements OnInit {
  companyCrudForm: FormGroup;

  result: Company;

  typeCrud: string;

  path: string;

  title = 'Empresa';

  name = 'Empresa';

  isDelete = false;

  constructor(
    public fb: FormBuilder,
    public route: ActivatedRoute,
    public companyService: CompanyService,
    public messagesService: MessagesService,
  ) {
   
  }

  ngOnInit() {
    this.path = `/${this.route.snapshot.parent.parent.url[0]}/${this.route.snapshot.parent.url[0]}`;
    this.typeCrud = this.route.snapshot.url[0].path;
    this.result = this.route.snapshot.data.result;

    this.createForm(this.result);
  }

  get fControls() {
    return this.companyCrudForm.controls;
  }

  createForm(company: Company) {
    this.companyCrudForm = this.fb.group({
      id: [company.id],
      document: [company.document, [Validators.required, Validators.maxLength(10)]],
      email: [company.email, Validators.required],
    });

    this.setTitle();
  }

  setTitle() {
    switch (this.typeCrud) {
      default:
        break;
      case 'visualizar': {
        this.title = `Visualizar ${this.name}`;
        this.companyCrudForm.disable();
        break;
      }
      case 'editar': {
        this.title = `Editar ${this.name}`;
        break;
      }
      case 'excluir': {
        this.title = `Excluir ${this.name}`;
        this.companyCrudForm.disable();
        this.isDelete = true;
        break;
      }
      case 'criar': {
        this.title = `Cadastrar ${this.name}`;
        break;
      }
    }
  }

  onSubmit(form) {
    if (this.isDelete === false) {
      if (form.valid) {
        this.companyService.save(form.value)
          .subscribe((response) => {
            if (this.typeCrud !== 'criar') {
              this.messagesService.openSucess(
                'Alteração realizado com sucesso !!',
              );
            } else {
              this.messagesService.openSucess(
                'O cadastro foi realizado com sucesso !!',
                `${this.path}/visualizar/${response.id}`,
              );
            }
          });
      }
    } else {
      this.companyService
        .delete(this.fControls.id.value)
        .subscribe(() => {
          this.messagesService.openSucess(
            'Foi excluido com sucesso !!',
            `${this.path}/consultar`,
          );
        });
    }
  }
}
