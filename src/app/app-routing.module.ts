import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {FavoritesPageComponent} from './favorites-page/favorites-page.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'favorites', component: FavoritesPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

