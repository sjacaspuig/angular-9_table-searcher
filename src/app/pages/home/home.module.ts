import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { SearcherModule } from 'src/app/components/searcher/searcher.module';
import { TableModule } from 'src/app/components/table/table.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { ListFilterPipe } from 'src/app/pipes/list-filter-pipe.pipe';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    SearcherModule,
    TableModule,
    FooterModule,
  ],
  declarations: [
    HomeComponent,
    ListFilterPipe
  ]
})
export class HomeModule { }
