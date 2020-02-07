import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GetPlanetComponent } from './get-planet/get-planet.component';
import { AddPlanetComponent } from './add-planet/add-planet.component';
import { EditPlanetComponent } from './edit-planet/edit-planet.component';
import { PlanetsRouting } from './planets.routing';
import { PlanetsService } from './shared/services/planets.service';
import { QuestionControlService } from '../shared/services/question-control.service';
import { DynamicFormModule } from '../shared/components/dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [
    GetPlanetComponent,
    AddPlanetComponent,
    EditPlanetComponent
  ],
  imports: [
    BrowserModule,
    PlanetsRouting,
    DynamicFormModule
  ],
  providers: [
    PlanetsService,
    QuestionControlService
  ],
})
export class PlanetsModule { }
