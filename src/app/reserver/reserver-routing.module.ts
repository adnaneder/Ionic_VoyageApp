import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserverPage } from './reserver.page';

const routes: Routes = [
  {
    path: '',
    component: ReserverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserverPageRoutingModule {}
