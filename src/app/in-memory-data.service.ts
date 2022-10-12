import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';

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
        quantity: 69,
        unit: '',
      },
    ];
    return { items };
  }

  // Overrides the genId method to ensure that an item always has an id.
  // If the items array is empty,
  // the method below returns the initial number (1).
  // if the items array is not empty, the method below returns the highest
  // item id + 1.
  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;
  }
}
