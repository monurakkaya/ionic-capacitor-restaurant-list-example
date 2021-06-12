import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'around-me',
    loadChildren: () => import('./pages/around-me/around-me.module').then(m => m.AroundMePageModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/restaurants/around-me'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
