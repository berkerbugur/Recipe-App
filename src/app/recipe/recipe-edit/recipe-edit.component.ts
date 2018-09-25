import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editActive = false;
  recipesF: FormGroup;

  constructor(private route: ActivatedRoute, private rcpService: RecipeService) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editActive = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    console.log(this.recipesF);
}
  get controls() {
    return (<FormArray>this.recipesF.get('ingredients')).controls;
  }

  private initForm() {
    let rcpName = '';
    let rcpImg = '';
    let rcpDesc = '';
    const recipeIngr = new FormArray([]);

    if (this.editActive) {
      const rcp = this.rcpService.getRecipe(this.id);
      rcpName =  rcp.name;
      rcpImg = rcp.imagePath;
      rcpDesc = rcp.description;
      if (rcp['ingredients']) {
        for (const ingr of rcp.ingredients) {
          recipeIngr.push(
            new FormGroup({
              'name': new FormControl(ingr.name),
              'amount': new FormControl(ingr.amount)
            })
          );
        }
      }
    }
    this.recipesF = new FormGroup({
      'name': new FormControl(rcpName),
      'imgPath': new FormControl(rcpImg),
      'description': new FormControl(rcpDesc),
      'ingredients': recipeIngr
    });
  }
}
