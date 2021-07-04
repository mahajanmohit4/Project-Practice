import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableRoutingModule } from './draggable-routing.module';
import { DraggableComponent } from './draggable/draggable.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { DraggableResizableComponent } from './draggable-resizable/draggable-resizable.component';
import { MaterialModule } from 'src/app/layout/material/material.module';

import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [DraggableComponent, DraggableResizableComponent],
  imports: [
    CommonModule,
    DraggableRoutingModule,
    AngularDraggableModule,
    MaterialModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  exports: [DraggableComponent],
})
export class DraggableModule {}
