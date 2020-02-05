import { Routes, RouterModule } from '@angular/router';

import { GetPlanetComponent } from './get-planet/get-planet.component';


export const PlanetsRouting = RouterModule.forChild(
  [
    {
      path: 'planets',
      children: [
        {
          path: '',
          component: GetPlanetComponent
        }
      ]
    },
  ]
);
