import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GetPlanetComponent } from './get-planet/get-planet.component';
import { AddPlanetComponent } from './add-planet/add-planet.component';
import { EditPlanetComponent } from './edit-planet/edit-planet.component';
import { PlanetsRouting } from './planets.routing';
import { PlanetsService } from './shared/services/planets.service';

@NgModule({
  declarations: [
    GetPlanetComponent,
    AddPlanetComponent,
    EditPlanetComponent
  ],
  imports: [
    BrowserModule,
    PlanetsRouting
  ],
  providers: [
    PlanetsService
  ],
})
export class PlanetsModule { }
