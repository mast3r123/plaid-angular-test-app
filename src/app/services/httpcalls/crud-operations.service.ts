import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudOperationsService {

  constructor(private httpClient: HttpClient) { }

  getTransactions() {
    const apiUrl = `${ environment.baseUrl }/${ environment.epTransactions }`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; application/x-www-form-urlencoded' });
    this.httpClient.post(apiUrl, {}, { headers })
      .toPromise()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
