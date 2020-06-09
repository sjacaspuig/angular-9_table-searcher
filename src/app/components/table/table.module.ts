import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ApiService } from 'src/app/services/api/api.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [TableComponent],
  exports: [TableComponent],
  providers: [ApiService]
})
export class TableModule { }
