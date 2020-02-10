import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

import { PlanetsService } from '../shared/services/planets.service';

@Component({
  selector: 'app-get-planet',
  templateUrl: './get-planet.component.html',
  styleUrls: ['./get-planet.component.css']
})
export class GetPlanetComponent implements OnInit {
  planets: any[];
  displayedColumns: string[] = ['name', 'diameter', 'climate', 'population'];

  constructor(
    private planetService: PlanetsService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getPlanets();
  }

  private getPlanets = async () => {
    const {results: planets } = await this.planetService.get().toPromise();

    this.planets = planets;
  }

}
