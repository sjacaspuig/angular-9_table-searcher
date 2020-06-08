import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {

  constructor(Api: ApiService) {
    console.log(Api.getSources());
    console.log(Api.getPopulation());
  }

  ngOnInit() {
  }

}
