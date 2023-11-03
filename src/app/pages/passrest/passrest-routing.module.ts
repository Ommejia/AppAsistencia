import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassrestPage } from './passrest.page';

const routes: Routes = [
  {
    path: '',
    component: PassrestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassrestPageRoutingModule {}
