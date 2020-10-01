import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-button-crud',
  templateUrl: './button-crud.component.html',
  styleUrls: ['./button-crud.component.scss'],
})
export class ButtonCrudComponent implements OnInit {
  @Input() path: string;

  @Input() flgDelete = true;

  @Input() flgEdit = true;

  @Input() flgView = true;

  @Input() flgCreate = true;

  operation: string;

  id: number;

  constructor(
    private _location: Location,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) {}

  ngOnInit() {
    this.operation = this._activatedRoute.snapshot.url[0].path;
    this._activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.id = params.id;
      }
    });
  }

  deleteClicked() {
    this._router.navigate([`/${this.path}/excluir/${this.id}`]);
  }

  editClicked() {
    this._router.navigate([`/${this.path}/editar/${this.id}`]);
  }

  viewClicked() {
    this._router.navigate([`/${this.path}/visualizar/${this.id}`]);
  }

  newClicked() {
    this._router.navigate([`/${this.path}/criar`]);
  }

  backClicked() {
    this._location.back();
  }
}
