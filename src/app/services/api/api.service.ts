import { Injectable } from '@angular/core';
import datasource from '../../assets/datasource.json';
import infoPopulation from '../../assets/info-population.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  sources: {} = {};
  population: {} = {};

  constructor() {
    this.sources = datasource;
    this.population = infoPopulation;
  }

  getSources(): {} {
    return this.sources;
  }

  getPopulation(): {} {
    return this.population;
  }

}
