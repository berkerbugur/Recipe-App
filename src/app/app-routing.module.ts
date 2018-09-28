import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipeComponent} from './recipe/recipe.component';
import {ShoppingComponent} from './shopping/shopping.component';
import {RecipeStartComponent} from './recipe/recipe-start/recipe-start.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipe/recipe-edit/recipe-edit.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {AuthGuard} from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipeComponent, children: [
      { path: '', component: RecipeStartComponent},
      { path: 'newRcp', component: RecipeEditComponent, canActivate: [AuthGuard] },
      { path: ':id', component: RecipeDetailComponent},
      { path: ':id/edit', component: RecipeEditComponent,  canActivate: [AuthGuard]}
    ]},
  { path: 'shopping-list', component: ShoppingComponent},
  { path: 'signUp', component: SignUpComponent},
  { path: 'signIn', component: SignInComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
