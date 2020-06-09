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
  searchModel: any;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.persons = this.api.getPopulation().population.person;
  }

 }
