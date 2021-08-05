import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./pages/draggable/passing-data/passing-data.module').then(
  //       (m) => m.PassingDataModule
  //     ),
  // },
  {
    path: '',
    loadChildren: () =>
      import('./pages/mat-tab-pr/mat-tab-pr.module').then(
        (m) => m.MatTabPrModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
