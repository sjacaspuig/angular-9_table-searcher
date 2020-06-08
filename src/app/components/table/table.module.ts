import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ApiService } from 'src/app/services/api/api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent],
  providers: [ApiService]
})
export class TableModule { }
