import { Iclone } from './iclone';

export class Item implements Iclone<Item> {
  id: number;
  value: string;

  clone(): Item {
    let newItem = new Item();
    newItem.id = this.id;
    newItem.value = this.value;
    return newItem;
  }
}
