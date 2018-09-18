import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipeComponent} from './recipe/recipe.component';
import {ShoppingComponent} from './shopping/shopping.component';
import {RecipeStartComponent} from './recipe/recipe-start/recipe-start.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipe/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipeComponent, children: [
      { path: '', component: RecipeStartComponent},
      { path: 'newRcp', component: RecipeEditComponent},
      { path: ':id', component: RecipeDetailComponent},
      { path: ':id/edit', component: RecipeEditComponent}
    ]},
  { path: 'shopping-list', component: ShoppingComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}