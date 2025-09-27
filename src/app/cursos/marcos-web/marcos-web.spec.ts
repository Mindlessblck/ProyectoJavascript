import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcosWeb } from './marcos-web';

describe('MarcosWeb', () => {
  let component: MarcosWeb;
  let fixture: ComponentFixture<MarcosWeb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarcosWeb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcosWeb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
