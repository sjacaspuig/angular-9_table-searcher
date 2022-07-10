import { Injectable } from '@angular/core';
import { Sources } from 'src/app/models/sources';
import { Populations } from 'src/app/models/populations';
import { SOURCE } from 'src/app/constants/sources';
import { POPULATION } from 'src/app/constants/population';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor() { }

  getSource(): Sources {
    return SOURCE;
  }

  getPopulation(): Populations {
    return POPULATION;
  }
}
