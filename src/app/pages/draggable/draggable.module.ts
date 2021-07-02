import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableRoutingModule } from './draggable-routing.module';
import { DraggableComponent } from './draggable/draggable.component';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  declarations: [DraggableComponent],
  imports: [CommonModule, DraggableRoutingModule, AngularDraggableModule],
  exports: [DraggableComponent],
})
export class DraggableModule {}
