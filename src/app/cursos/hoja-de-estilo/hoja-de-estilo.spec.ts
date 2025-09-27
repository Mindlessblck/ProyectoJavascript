import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaDeEstilo } from './hoja-de-estilo';

describe('HojaDeEstilo', () => {
  let component: HojaDeEstilo;
  let fixture: ComponentFixture<HojaDeEstilo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HojaDeEstilo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HojaDeEstilo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
