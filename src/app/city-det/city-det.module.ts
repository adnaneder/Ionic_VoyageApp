import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityDetPageRoutingModule } from './city-det-routing.module';

import { CityDetPage } from './city-det.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CityDetPageRoutingModule
  ],
  declarations: [CityDetPage]
})
export class CityDetPageModule {}
