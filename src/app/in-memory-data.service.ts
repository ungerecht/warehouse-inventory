import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      {
        id: 1,
        name: 'onions',
        description: 'sweet',
        quantity: 10,
        unit: 'lbs',
      },
      { id: 2, name: 'peppers', description: 'red', quantity: 5, unit: 'lbs' },
      {
        id: 3,
        name: 'beans',
        description: 'black',
        quantity: 12,
        unit: 'cans',
      },
      {
        id: 4,
        name: 'jalapenos',
        description: 'spicy',
        quantity: 100,
        unit: 'lbs',
      },
      {
        id: 5,
        name: 'cheese',
        description: 'shredded',
        quantity: 6000,
        unit: 'lbs',
      },
      {
        id: 6,
        name: 'tortillas',
        description: 'flour',
        quantity: 203,
        unit: '',
      },
    ];
    const transactions = [
      {
        id: 1,
        itemid: 1,
        date: '2022-10-10',
        amount: 5,
      },
      {
        id: 2,
        itemid: 1,
        date: '2022-10-11',
        amount: 5,
      },
      {
        id: 3,
        itemid: 2,
        date: '2022-10-11',
        amount: 5,
      },
      {
        id: 4,
        itemid: 3,
        date: '2022-10-11',
        amount: 12,
      },
      {
        id: 5,
        itemid: 4,
        date: '2022-10-11',
        amount: 75,
      },
      {
        id: 6,
        itemid: 5,
        date: '2022-10-11',
        amount: 7000,
      },
      {
        id: 7,
        itemid: 6,
        date: '2022-10-11',
        amount: 300,
      },
      {
        id: 8,
        itemid: 6,
        date: '2022-10-12',
        amount: -97,
      },
      {
        id: 8,
        itemid: 5,
        date: '2022-10-12',
        amount: -1000,
      },
      {
        id: 9,
        itemid: 4,
        date: '2022-10-13',
        amount: 25,
      },
    ];

    return { items, transactions };
  }

  // Overrides the genId method to ensure that an item always has an id.
  // If the items array is empty,
  // the method below returns the initial number (1).
  // if the items array is not empty, the method below returns the highest
  // item id + 1.
  genId<T extends Item | Transaction>(table: T[]): number {
    return table.length > 0 ? Math.max(...table.map((t) => t.id)) + 1 : 1;
  }
}
