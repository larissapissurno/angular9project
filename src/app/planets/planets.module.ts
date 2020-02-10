import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { GetPlanetComponent } from './get-planet/get-planet.component';
import { EditPlanetComponent } from './edit-planet/edit-planet.component';
import { PlanetsRouting } from './planets.routing';
import { PlanetsService } from './shared/services/planets.service';
import { NewPlanetComponent } from './new-planet/new-planet.component';

@NgModule({
  declarations: [
    GetPlanetComponent,
    EditPlanetComponent,
    NewPlanetComponent
  ],
  imports: [
    CommonModule,
    PlanetsRouting,

    MatListModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [
    PlanetsService
  ],
})
export class PlanetsModule { }
