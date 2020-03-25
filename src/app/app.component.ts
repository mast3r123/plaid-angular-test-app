import { AfterViewInit, Component, OnInit } from '@angular/core';
import { API_KEY } from './constants';
import { SessionStoreService } from './services/store/session-store.service';
import { PlaidOnSuccessArgs } from 'ngx-plaid-link/lib/interfaces';
import { CrudOperationsService } from './services/httpcalls/crud-operations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'front-end-plaid';

  API_KEY  = API_KEY;

  constructor(public userSession: SessionStoreService,
              private service: CrudOperationsService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() { }

  onPlaidClick(event: any) {
    // console.log('onPlaidClick : ', event);
  }

  onPlaidEvent(event: any) {
    // console.log('onPlaidEvent : ', event);
  }

  onPlaidLoad(event: any) {
    // console.log('onPlaidLoad : ', event);
  }

  onPlaidExit(event: any) {
    // console.log('onPlaidExit : ', event);
  }

  onPlaidSuccess(event: PlaidOnSuccessArgs) {
    this.userSession.setUserDetails(event);
  }

  onGetTransactions() {
    this.service.getTransactions();
  }
}
