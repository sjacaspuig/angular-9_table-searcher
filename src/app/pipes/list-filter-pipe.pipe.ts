import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../models/populations';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(list: Person[], filterText: string): any {
    return list ?
      list.filter((item: Person) =>
        item.name.search(new RegExp(filterText, 'i')) > -1 ||
        item.surname.search(new RegExp(filterText, 'i')) > -1 ||
        item.surname2.search(new RegExp(filterText, 'i')) > -1 ||
        item.phone.search(new RegExp(filterText, 'i')) > -1 ||
        item.datebirthday.search(new RegExp(filterText, 'i')) > -1 ||
        item.sex.search(new RegExp(filterText, 'i')) > -1 ||
        item.lastModification.search(new RegExp(filterText, 'i')) > -1)
      : [];
  }
}
