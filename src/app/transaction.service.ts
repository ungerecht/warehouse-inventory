import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactionsUrl = 'api/transactions'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  /** GET transactions from the server */
  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsUrl);
  }

  /** GET transaction by id */
  getTransaction(id: number): Observable<Transaction> {
    const url = `${this.transactionsUrl}/?id=${id}`;
    return this.http.get<Transaction>(url);
  }

  /////////// Save methods ////////////

  /** POST: add a new transaction to the server */
  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(
      this.transactionsUrl,
      transaction,
      this.httpOptions
    );
  }

  /** DELETE: delete the transaction from the server */
  deleteTransaction(id: number): Observable<Transaction> {
    const url = `${this.transactionsUrl}/${id}`;
    return this.http.delete<Transaction>(url, this.httpOptions);
  }

  /** PUT: update the transaction on the server */
  updateTransaction(transaction: Transaction): Observable<any> {
    return this.http.put(this.transactionsUrl, transaction, this.httpOptions);
  }

  constructor(private http: HttpClient) {}
}
