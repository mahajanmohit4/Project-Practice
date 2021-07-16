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
      import('./pages/flowchart-standalone/flowchart-standalone.module').then(
        (m) => m.FlowchartStandaloneModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
