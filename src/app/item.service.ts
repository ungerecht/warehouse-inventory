import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private itemsUrl = 'api/items'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  /** GET items from the server */
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl);
  }

  /** GET item by id */
  getItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/?id=${id}`;
    return this.http.get<Item>(url);
  }

  /////////// Save methods ////////////

  /** POST: add a new item to the server */
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item, this.httpOptions);
  }

  /** DELETE: delete the item from the server */
  deleteItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.delete<Item>(url, this.httpOptions);
  }

  /** PUT: update the item on the server */
  updateItem(item: Item): Observable<any> {
    return this.http.put(this.itemsUrl, item, this.httpOptions);
  }

  constructor(private http: HttpClient) {}
}
