import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AroundMePageRoutingModule } from './around-me-routing.module';

import { AroundMePage } from './around-me.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AroundMePageRoutingModule
  ],
  declarations: [AroundMePage]
})
export class AroundMePageModule {}
