import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudOperationsService {

  constructor(private httpClient: HttpClient) { }

  getTransactions(token: string) {
    const apiUrl = `${ environment.baseUrl }/${ environment.epTransactions }`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;application/json' });
    const body = new URLSearchParams();
    // body.set('public_token', 'public-sandbox-d8719373-ac7f-4471-8234-0ca390ee6a84');
    body.set('public_token', token);
    this.httpClient.post(apiUrl, body, { headers })
      .toPromise()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
