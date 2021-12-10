import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperacionCorreoPage } from './recuperacion-correo.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperacionCorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperacionCorreoPageRoutingModule {}
