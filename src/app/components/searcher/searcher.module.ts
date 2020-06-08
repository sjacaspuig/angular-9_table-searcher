import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherComponent } from './searcher.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearcherComponent],
  exports: [SearcherComponent],
})
export class SearcherModule { }
