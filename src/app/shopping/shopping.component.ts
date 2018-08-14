import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Pasta', 5),
    new Ingredient('Zucchini', 1)
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingr : Ingredient){
    this.ingredients.push(ingr);
  }

}
