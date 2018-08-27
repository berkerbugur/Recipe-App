import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from '../shopping/shopping.service';

@Injectable()
export class RecipeService {
  recipeSelect = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Stir Fried Lo Mein', 'The CarBomb', 'https://www.seriouseats.com/recipes/images/2017/03/' +
      'Stir_Fried_Lo_Mein_20170315_3-edit-1500x1125.jpg', [
        new Ingredient('Pasta', 2),
        new Ingredient('Olive Oil', 1),
        new Ingredient('Other Disgusting Stuff', 1)
    ]),
    new Recipe('Basic Mix Pizza', 'A Pizza For Every Home', 'https://img.bestrecipes.com.au/RCK3slSo/h300-w400' +
      '-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg', [
        new Ingredient('Pizza Dough', 1),
        new Ingredient('Sausage', 5),
        new Ingredient('Mozarella', 3)
    ])
  ];

  constructor(private shoppingService: ShoppingService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  recipeToShopping(ingredients: Ingredient[]) {
      this.shoppingService.addIngredients(ingredients);
  }
}
