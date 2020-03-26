import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export interface ITransactions {
  account_id: string;
  name: string;
  amount: string;
  iso_currency_code: string;
  date: string;
  transaction_type: string;
}

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {

  constructor() { }

  public static convert(transactions: ITransactions[]) {

    const doc = new jsPDF();
    const col = ['ACCOUNT ID', 'NAME', 'AMOUNT', 'ISO CURRENCY', 'DATE', 'TRANSACTION TYPE'];
    const rows = [];

    transactions.forEach((i) => {
      const temp = [ i.account_id, i.name, i.amount, i.iso_currency_code, i.date, i.transaction_type];
      rows.push(temp);
    });

    doc.autoTable(col, rows);
    doc.save('Transactions.pdf');
  }
}
