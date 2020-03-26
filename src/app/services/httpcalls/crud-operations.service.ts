import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PdfGeneratorService } from '../file-operations/pdf-generator.service';

@Injectable({
  providedIn: 'root'
})
export class CrudOperationsService {

  constructor(private httpClient: HttpClient) { }

  getTransactions(token: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const apiUrl = `${ environment.baseUrl }/${ environment.epTransactions }`;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.httpClient.post(apiUrl, { public_token: token }, { headers })
        .toPromise()
        .then((response: any[]) => {
          (response && response.length) ? PdfGeneratorService.convert(response) : reject({ error: true, message: 'Response is empty' });
        })
        .catch((error) => { reject(error); });
    });
  }
}
