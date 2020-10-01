import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-consulta',
  templateUrl: './button-consulta.component.html',
  styleUrls: ['./button-consulta.component.scss'],
})
export class ButtonConsultaComponent {
  @Input() showBtn = true;
  
  constructor() {}
}
