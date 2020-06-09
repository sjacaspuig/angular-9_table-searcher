import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Custom components
import { HeaderModule } from './components/header/header.module';
import { SearcherModule } from './components/searcher/searcher.module';
import { TableModule } from './components/table/table.module';
import { FooterModule } from './components/footer/footer.module';

import { ApiService } from './services/api/api.service';
import { ListFilterPipe } from './pipes/list-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListFilterPipe
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SearcherModule,
    TableModule,
    FooterModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
