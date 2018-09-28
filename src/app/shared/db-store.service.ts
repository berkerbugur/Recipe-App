import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipe/recipe.service';
import {ShoppingService} from '../shopping/shopping.service';
import {Recipe} from '../recipe/recipe.model';
import {map} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DbStoreService {
  constructor(private httpReq: Http, private recipes: RecipeService, private shopping: ShoppingService, private auth: AuthService) {}

  storeRcp() {
    const token = this.auth.getToken();
    return this.httpReq.put('https://rcpbook-be9bb.firebaseio.com/recipes.json?auth=' + token, this.recipes.getRecipes());
  }

  fetchRcp() {
    const token = this.auth.getToken();

    return this.httpReq.get('https://rcpbook-be9bb.firebaseio.com/recipes.json?auth=' + token)
      .pipe(map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let rcp of recipes){
          if (!rcp['ingredients']) {
            console.log(rcp);
            rcp['ingredients'] = [];
          }
        }
        return recipes;
      }))
      .subscribe((recipes: Recipe[]) => {

        this.recipes.setRcp(recipes);
      });
  }

}
