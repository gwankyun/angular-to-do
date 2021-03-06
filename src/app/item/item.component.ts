import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    this.item.value = value;
  }

  onRemove(id: number) {
    this.itemService.removeItem(id);
  }

  onSetTop(current: Item) {
    const c = current.clone();
    this.itemService.removeItem(current.id);
    this.itemService.data.unshift(c);
  }

}
