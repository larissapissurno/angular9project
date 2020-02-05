import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const AppRouting = RouterModule.forRoot(
  [
    { path: '', component: HomeComponent },
    { path: 'planets', loadChildren: () => import(`./planets/planets.module`).then(s => s.PlanetsModule) },
    // { path: 'forbidden', component: ForbiddenComponent, data: { requiresPermission: false } },
    // { path: '**', component: NotFoundComponent, data: { requiresPermission: false }  }
  ],
  { useHash: true, enableTracing: false }
);
