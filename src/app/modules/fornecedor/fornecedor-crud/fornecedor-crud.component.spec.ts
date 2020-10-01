import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorCrudComponent } from './fornecedor-crud.component';

describe('FornecedorCrudComponent', () => {
  let component: FornecedorCrudComponent;
  let fixture: ComponentFixture<FornecedorCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedorCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
