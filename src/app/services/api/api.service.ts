import { Injectable } from '@angular/core';
import { source, sources, country } from 'src/app/assets/datasource';
import { population, populations } from 'src/app/assets/info-population';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor() { }

  getSource(): sources {
    return source;
  }

  getPopulation(): populations {

    population.population.person.forEach(item => {
      item.datebirthday = moment(item.datebirthday).format('YYYY-MM-DD');
      item.lastModification = moment(item.lastModification).format('YYYY-MM-DD HH:mm');
      const prefix: country[] = source.data.country.filter((c: country) => c.id === item['country-id']);
      item.phone = '+' + prefix[0].prefix + ' ' + item.phone;
    });

    console.log(population);

    return population;
  }
}
