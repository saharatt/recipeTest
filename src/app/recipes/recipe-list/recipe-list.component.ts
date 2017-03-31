import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  @Output() recipi = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'This is Dummy', 'http://vignette2.wikia.nocookie.net/scribblenauts/images/7/70/Action_Figure.png/revision/latest?cb=20130117194506');

  constructor() {
  }

  ngOnInit() {
  }

  onSelected(data: Recipe) {


    this.recipi.emit(data);

  }

}
