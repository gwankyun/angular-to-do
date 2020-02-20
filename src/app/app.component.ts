import { Component } from '@angular/core';

class Item {
  id: number;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-app';
  list: Item[] = [];
  text: string = '';
  index: number = 0;

  onAdd(element: HTMLInputElement) {
    if (element.value === '') {
      alert('內容不能為空');
      return;
    }

    let item = new Item();
    item.id = this.index;
    item.value = element.value;
    this.list.push(item);
    element.value = '';
    this.index++;
  }

  onChange(value: string) {
    this.text = value;
  }

  onRemove(id: number) {
    let idx = this.list.findIndex(i => i.id === id);

    if (idx !== -1) {
      this.list.splice(idx, 1);
    }
  }
}
