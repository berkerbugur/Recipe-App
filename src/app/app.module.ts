import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { RecipeItemComponent} from './recipe/recipe-list/recipe-item/recipe-item.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingService} from './shopping/shopping.service';
import {AppRoutingModule} from './app-routing.module';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import {RecipeService} from './recipe/recipe.service';
import {DbStoreService} from './shared/db-store.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppingComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ShoppingService, RecipeService, DbStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
