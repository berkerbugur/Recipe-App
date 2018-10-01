import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';

import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {ShoppingService} from '../shopping/shopping.service';
import {RecipeService} from '../recipe/recipe.service';
import {DbStoreService} from '../shared/db-store.service';
import {AuthService} from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [ShoppingService, RecipeService, DbStoreService, AuthService]
})
export class CoreModule {}
