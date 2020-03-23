import { AfterViewInit, Component, OnInit } from '@angular/core';
import { API_KEY } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'front-end-plaid';

  API_KEY  = API_KEY;

  constructor() {}

  ngOnInit(): void {
  }

  // Create and open programatically once the library is loaded.
  ngAfterViewInit() { }

  onPlaidClick(event: any) {
    console.log('onPlaidClick : ', event);
  }

  onPlaidEvent(event: any) {
    console.log('onPlaidEvent : ', event);
  }

  onPlaidLoad(event: any) {
    console.log('onPlaidLoad : ', event);
  }

  onPlaidExit(event: any) {
    console.log('onPlaidExit : ', event);
  }

  onPlaidSuccess(event: any) {
    console.log('onPlaidSuccess : ', event);
  }
}
