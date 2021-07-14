import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoSelectComponent } from './demo-select/demo-select.component';
import { DraggableResizableComponent } from './draggable-resizable/draggable-resizable.component';
import { DraggableComponent } from './draggable/draggable.component';

const routes: Routes = [
  {
    path: '',
    component: DemoSelectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DraggableRoutingModule {}
