import { Routes } from '@angular/router';
import { Vagas } from './view/vagas/vagas';
import { Inicio } from './view/inicio/inicio';
import { PainelVagas } from './view/painel-vagas/painel-vagas';
import { Curriculos } from './view/curriculos/curriculos';
import { PainelCurriculos } from './view/painel-curriculos/painel-curriculos';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'vagas', component: Vagas },
  { path: 'painel-vagas', component: PainelVagas },
  { path: 'curriculos', component: Curriculos },
  { path: 'painel-curriculos', component: PainelCurriculos },

];
