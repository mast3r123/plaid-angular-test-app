import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPlaidLinkModule } from 'ngx-plaid-link';
import { SessionStoreService } from './services/store/session-store.service';
import { CrudOperationsService } from './services/httpcalls/crud-operations.service';
import { HttpClientModule } from '@angular/common/http';
import { PdfGeneratorService } from './services/file-operations/pdf-generator.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPlaidLinkModule,
    HttpClientModule,
  ],
  providers: [
    SessionStoreService,
    CrudOperationsService,
    PdfGeneratorService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
