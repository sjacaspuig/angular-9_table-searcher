import { Component, OnInit, Output, Input, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
})
export class SearcherComponent implements OnInit {

  @HostBinding('class.app-searcher') appSearcher  = true;

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
