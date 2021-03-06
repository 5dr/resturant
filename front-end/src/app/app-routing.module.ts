import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { FoodsComponent } from './components/foods/foods.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { ResturantsComponent } from './components/resturants/resturants.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'drinks',component:DrinksComponent},
  {path:'foods',component:FoodsComponent},
  {path:'chefs',component:ChefsComponent},
  {path:'feedbacks',component:FeedbacksComponent},
  {path:'resturant',component:ResturantsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
