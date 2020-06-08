import { Injectable } from '@angular/core';
import datasource from '../../../assets/datasource.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
    console.log(datasource);
  }
}
