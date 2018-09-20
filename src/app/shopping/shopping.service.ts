import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingService {
  ingredientChange = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Pasta', 5),
    new Ingredient('Zucchini', 1)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientChange.next(this.ingredients.slice());
  }

  addIngredients(ing: Ingredient[]) {
    this.ingredients.push(...ing);
    this.ingredientChange.next(this.ingredients.slice());

  }
}
