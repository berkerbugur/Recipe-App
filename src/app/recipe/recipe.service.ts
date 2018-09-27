import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from '../shopping/shopping.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  rcpChange = new Subject<Recipe[]>();

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
    ]),
    new Recipe('Potato Nuggets', 'Nuggets For Your Inner Potato', 'http://recipechart.com/wp-content/uploads/2013/02/Potato_Nuggets.jpg',
      [
      new Ingredient('Oil', 1),
      new Ingredient('Potato', 5),
      new Ingredient('Pure Hatred', 3)
    ]),
    new Recipe('Faggots', 'Faggots for... people!', 'data:image/jpeg;base64,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',
      [
      new Ingredient('Faggot', 1),
      new Ingredient('Actually Faggot', 1),
      new Ingredient('Ginger Soul', 5)
    ])
  ];

  constructor(private shoppingService: ShoppingService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe( rcpId: number) {
    return this.recipes[rcpId];
  }

  recipeToShopping(ingredients: Ingredient[]) {
      this.shoppingService.addIngredients(ingredients);
  }

  addRcp(recipe: Recipe) {
    this.recipes.push(recipe);
    this.rcpChange.next(this.recipes.slice());
  }

  updateRcp(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.rcpChange.next(this.recipes.slice());
  }

  deleteRcp(index: number) {
    this.recipes.splice(index, 1);
    this.rcpChange.next(this.recipes.slice());
  }

  setRcp(recipes: Recipe[]) {
    this.recipes = recipes;
    this.rcpChange.next(this.recipes.slice());
  }
}
