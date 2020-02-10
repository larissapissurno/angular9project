import { Routes, RouterModule } from '@angular/router';

import { GetPlanetComponent } from './get-planet/get-planet.component';
import { NewPlanetComponent } from './new-planet/new-planet.component';


export const PlanetsRouting = RouterModule.forChild(
  [
    {
      path: '',
      children: [
        {
          path: '',
          component: GetPlanetComponent,
        },
        {
          path: 'new',
          component: NewPlanetComponent
        }
      ]
    },
  ]
);
