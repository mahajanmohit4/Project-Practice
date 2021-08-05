import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component/component1/component1.component';
import { Component2Component } from './component/component2/component2.component';
import { Component3Component } from './component/component3/component3.component';
import { MatTabPrComponent } from './mat-tab-pr.component';

const routes: Routes = [
  {
    path: '',
    component: MatTabPrComponent,
    children: [
      {
        path: '1',
        component: Component1Component,
      },
      {
        path: '2',
        component: Component2Component,
      },
      {
        path: '3',
        component: Component3Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatTabPrRoutingModule {}
