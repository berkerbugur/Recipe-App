import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { RecipeItemComponent} from './recipe/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppingComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
