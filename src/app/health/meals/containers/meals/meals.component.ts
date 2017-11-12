import { Component, OnInit, OnDestroy } from '@angular/core';
import { MealsService, Meal } from '../../../shared/services/meals/meals.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'meals',
  styleUrls: ['meals.component.scss'],
  template: `
    <div>
      Meals
    </div>
  `
})

export class MealsComponent implements OnInit, OnDestroy {

  meals$: Observable<Meal[]>;
  subscription: Subscription;

  constructor(
    private mealsService: MealsService
  ) {}

  ngOnInit() {
    this.subscription = this.mealsService.meals$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
