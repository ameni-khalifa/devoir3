import { Routes } from '@angular/router';

import { Avions } from './avions/avions';
import { AddAvion } from './add-avion/add-avion';
import { UpdateAvion } from './update-avion/update-avion';
import { ConsulterAvion } from './consulter-avion/consulter-avion';

export const routes: Routes = [
  { path: 'avions', component: Avions },
  { path: 'add-avion', component: AddAvion },
  { path: 'update-avion/:id', component: UpdateAvion },
  { path: 'consulter-avion/:id', component: ConsulterAvion },
  { path: '', redirectTo: 'avions', pathMatch: 'full' }
];
