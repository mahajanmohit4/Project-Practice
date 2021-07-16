import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowchartStandaloneComponent } from './flowchart-standalone.component';

const routes: Routes = [{ path: '', component: FlowchartStandaloneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlowchartStandaloneRoutingModule {}
