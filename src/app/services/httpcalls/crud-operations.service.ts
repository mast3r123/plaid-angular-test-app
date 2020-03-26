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
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.httpClient.post(apiUrl, { public_token: token }, { headers })
      .toPromise()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
