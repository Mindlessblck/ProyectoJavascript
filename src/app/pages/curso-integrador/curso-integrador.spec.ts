import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoIntegrador } from './curso-integrador';

describe('CursoIntegrador', () => {
  let component: CursoIntegrador;
  let fixture: ComponentFixture<CursoIntegrador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoIntegrador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoIntegrador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
