import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api/api.service';
import { person } from './assets/info-population';
import { sex, language, country } from './assets/datasource';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  persons: person[];
  sexs: sex[];
  languages: language[];
  countries: country[];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.persons = this.api.getPopulation().population.person;
    this.sexs = this.api.getSource().data.sex;
    this.languages = this.api.getSource().data.language;
    this.countries = this.api.getSource().data.country;
  }

 }
