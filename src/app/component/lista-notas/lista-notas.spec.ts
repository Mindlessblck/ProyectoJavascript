import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';

import { ListaNotasComponent } from './lista-notas';

describe('ListaNotasComponent', () => {
  let component: ListaNotasComponent;
  let fixture: ComponentFixture<ListaNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaNotasComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
