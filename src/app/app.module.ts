import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPlaidLinkModule } from 'ngx-plaid-link';
import { SessionStoreService } from './services/store/session-store.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPlaidLinkModule,
  ],
  providers: [
    SessionStoreService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
