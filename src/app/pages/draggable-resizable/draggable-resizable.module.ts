import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableModule } from '../draggable/draggable.module';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  declarations: [DraggableResizableModule],
  imports: [CommonModule, AngularDraggableModule],
  exports: [DraggableResizableModule],
})
export class DraggableResizableModule {}
