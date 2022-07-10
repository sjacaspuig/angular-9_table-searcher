import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/populations';
import { Country, DataSource, Gender } from 'src/app/models/sources';
import { ApiService } from 'src/app/services/api/api.service';
import moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  persons: Person[];
  sources: DataSource;
  searchModel: any;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.persons = this.api.getPopulation().population.person;
    this.sources = this.api.getSource().data;

    // Procesar los datos personales
    this.persons.forEach(item => {
      item.datebirthday = moment(item.datebirthday).format('YYYY-MM-DD');
      item.lastModification = moment(item.lastModification).format('YYYY-MM-DD HH:mm');
      const currentCountry: Country[] = this.sources.country.filter((c: Country) => c.id === item['country-id']);
      item.phone = '+' + currentCountry[0].prefix + ' ' + item.phone;
      const currentSex: Gender[] = this.sources.sex.filter((c: Gender) => c.key === item.sex);
      item.sex = currentSex[0].description;
    });
  }

}
