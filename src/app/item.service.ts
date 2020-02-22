import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  data: Item[] = [];
  index: number = 0;

  constructor() { }

  getItemArray(): Item[] {
    return this.data;
  }

  addItem(item: Item): void {
    item.id = this.index;
    this.index++;
    this.data.push(item);
  }

  removeItem(id: number) {
    let idx = this.data.findIndex(i => i.id === id);

    if (idx !== -1) {
      this.data.splice(idx, 1);
    }
  }
}
