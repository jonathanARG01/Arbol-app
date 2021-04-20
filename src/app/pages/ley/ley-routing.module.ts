import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeyPage } from './ley.page';

const routes: Routes = [
  {
    path: '',
    component: LeyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeyPageRoutingModule {}
