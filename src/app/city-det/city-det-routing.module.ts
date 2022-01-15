import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityDetPage } from './city-det.page';

const routes: Routes = [
  {
    path: '',
    component: CityDetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityDetPageRoutingModule {}
