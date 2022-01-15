import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrancePageRoutingModule } from './france-routing.module';

import { FrancePage } from './france.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrancePageRoutingModule
  ],
  declarations: [FrancePage]
})
export class FrancePageModule {}
