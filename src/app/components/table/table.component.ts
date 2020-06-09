import { Component, OnInit, Input } from '@angular/core';
import { person } from 'src/app/assets/info-population';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  host: { class: 'app-table' },
})
export class TableComponent implements OnInit {

  @Input() dataList: person[];
  config: any;
  itemsPerPageList: number[];
  itemsForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.itemsPerPageList = [10, 20, 50];
    this.itemsForm = this.fb.group({
      itemsControl: this.itemsPerPageList[0]
    });

    this.config = {
      itemsPerPage: this.itemsForm.controls['itemsControl'].value,
      currentPage: 1,
      totalItems: this.dataList.length,
    };
  }

  pageChanged(event): void{
    this.config.currentPage = event;
  }

  onChangeSelect(): void {
    this.config.itemsPerPage = this.itemsForm.controls['itemsControl'].value;
  }

}
