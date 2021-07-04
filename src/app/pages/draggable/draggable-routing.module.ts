import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraggableResizableComponent } from './draggable-resizable/draggable-resizable.component';
import { DraggableComponent } from './draggable/draggable.component';

const routes: Routes = [
  {
    path: '',
    component: DraggableResizableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DraggableRoutingModule {}
