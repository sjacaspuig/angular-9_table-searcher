import { Pipe, PipeTransform } from '@angular/core';
import { person } from '../assets/info-population';

@Pipe({
  name: 'listFilter'
})
export class ListFilterPipe implements PipeTransform {

  transform(list: person[], filterText: string): any {
    return list ?
      list.filter((item: person) =>
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
