import { Component } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-app';
  list: Item[];
  text: string = '';
  // index: number = 0;
  current: Item;

  constructor(private itemService: ItemService) {

  }

  getItemAarray(): void {
    this.list = this.itemService.getItemArray();
  }

  ngOnInit() {
    this.getItemAarray();
  }

  onAdd(element: HTMLInputElement) {
    if (element.value === '') {
      alert('內容不能為空');
      return;
    }

    let item = new Item();
    item.value = element.value;

    this.itemService.addItem(item);

    element.value = '';
  }

  onChange(value: string) {
    this.text = value;
  }

  onRemove(id: number) {
    this.itemService.removeItem(id);
  }

  onSelect(i: Item) {
    this.current = i;
  }
}
