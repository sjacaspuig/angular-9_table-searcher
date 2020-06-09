import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  host: { class: 'app-searcher' },
})
export class SearcherComponent implements OnInit {

  @Input() searchModel;

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {

  }

  updateSearchModel(value: string): void {
    this.searchModel = value;
  }

  onSearch(): void {
    this.searchModelChange.emit(this.searchModel);
  }
}
