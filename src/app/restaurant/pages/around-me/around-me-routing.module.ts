import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AroundMePage } from './around-me.page';

const routes: Routes = [
  {
    path: '',
    component: AroundMePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AroundMePageRoutingModule {}
