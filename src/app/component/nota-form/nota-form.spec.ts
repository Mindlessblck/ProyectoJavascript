import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NotaFormComponent } from './nota-form';

describe('NotaFormComponent', () => {
  let component: NotaFormComponent;
  let fixture: ComponentFixture<NotaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotaFormComponent, FormsModule, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
