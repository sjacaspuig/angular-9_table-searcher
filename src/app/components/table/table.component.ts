import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { person } from 'src/app/assets/info-population';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  host: { class: 'app-table' },
})
export class TableComponent implements OnInit, DoCheck {

  @Input() dataList: person[];
  config: any;
  itemsPerPageList: number[];
  itemsForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.itemsPerPageList = [10, 20, 50];


    this.itemsForm = new FormGroup({
      'itemsControl': new FormControl(this.itemsPerPageList[0], [
          Validators.required,
          Validators.min(10),
          Validators.max(50)
    ]),
  });

    this.config = {
      itemsPerPage: this.itemsForm.controls['itemsControl'].value,
      currentPage: 1,
      totalItems: this.dataList.length,
    };
  }

  ngDoCheck() {
    this.config.totalItems = this.dataList.length;
  }

  pageChanged(event): void{
    this.config.currentPage = event;
  }

  onChangeSelect(): void {
    this.config.itemsPerPage = this.itemsForm.controls['itemsControl'].value;
  }

}
