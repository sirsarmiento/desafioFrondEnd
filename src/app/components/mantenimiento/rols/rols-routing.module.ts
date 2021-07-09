import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolsComponent } from './rols.component';

const routes: Routes = [{ path: '', component: RolsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolsRoutingModule { }
