import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonConsultaComponent } from './button-consulta.component';

describe('ButtonConsultaComponent', () => {
  let component: ButtonConsultaComponent;
  let fixture: ComponentFixture<ButtonConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonConsultaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
