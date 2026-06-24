import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelCurriculos } from './painel-curriculos';

describe('PainelCurriculos', () => {
  let component: PainelCurriculos;
  let fixture: ComponentFixture<PainelCurriculos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelCurriculos],
    }).compileComponents();

    fixture = TestBed.createComponent(PainelCurriculos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
