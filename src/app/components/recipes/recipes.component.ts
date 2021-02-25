import { Component, OnInit } from '@angular/core';
import { MockRecipes } from 'src/app/mock-data/recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  displayedColumns: string[] = ['Name'];
  dataSource = MockRecipes;

  constructor() { }

  ngOnInit(): void {
  }

}
