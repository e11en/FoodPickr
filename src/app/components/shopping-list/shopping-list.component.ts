import { Component, OnInit, Input } from '@angular/core';
import { ShoppingList } from 'src/app/models/models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Input() list: ShoppingList;

  constructor() { }

  ngOnInit() {
  }

}
