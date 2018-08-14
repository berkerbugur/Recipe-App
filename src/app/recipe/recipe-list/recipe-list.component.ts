import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectStat = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pasta', 'Simple pasta', 'https://www.seriouseats.com/recipes/images/2017/03/' +
      'Stir_Fried_Lo_Mein_20170315_3-edit-1500x1125.jpg'),
    new Recipe('Another Pasta', 'Not So Simple pasta', 'https://www.seriouseats.com/recipes/images/2017/03/' +
    'Stir_Fried_Lo_Mein_20170315_3-edit-1500x1125.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipeSelectStat.emit(recipe);
  }

}
