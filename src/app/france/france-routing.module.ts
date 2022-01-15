import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrancePage } from './france.page';

const routes: Routes = [
  {
    path: '',
    component: FrancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrancePageRoutingModule {}
