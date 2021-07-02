import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableRoutingModule } from './draggable-routing.module';
import { DraggableComponent } from './draggable/draggable.component';
import { MaterialModule } from 'src/app/layout/material/material.module';
import { AngularDraggableModule } from 'angular2-draggable';
import { NgDragDropModule } from 'ng-drag-drop';
import { AutosizeModule } from 'ngx-autosize';

@NgModule({
  declarations: [DraggableComponent],
  imports: [
    CommonModule,
    DraggableRoutingModule,
    MaterialModule,
    AngularDraggableModule,
    AutosizeModule,
    NgDragDropModule,
  ],
  exports: [DraggableComponent],
})
export class DraggableModule {}
