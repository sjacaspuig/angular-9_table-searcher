import { Injectable } from '@angular/core';
import { source, sources, country } from 'src/app/assets/datasource';
import { population, populations } from 'src/app/assets/info-population';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor() { }

  /*
    Crearía un servicio para simular el recibo de los datos de la api rest para poder
    usarlos en las diferentes vistas que tuviera, si fuera necesario.
    
    El archivo de los datos es .ts porque con .jsaon me está dando un error que ahora 
    mismo no encuentro solución
      ERROR in undefined is not iterable (cannot read property Symbol(Symbol.iterator))
  */

  getSource(): sources {
    return source;
  }

  getPopulation(): populations {

    population.population.person.forEach(item => {
      item.datebirthday = moment(item.datebirthday).format('YYYY-MM-DD');
      item.lastModification = moment(item.lastModification).format('YYYY-MM-DD HH:mm');
      const prefix: country[] = source.data.country.filter((country: country) => country.id === item["country-id"]);
      item.phone = '+' + prefix[0].prefix + ' ' + item.phone;
    });

    console.log(population);

    return population;
  }
} 
