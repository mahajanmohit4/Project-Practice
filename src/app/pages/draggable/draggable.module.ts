import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableRoutingModule } from './draggable-routing.module';
import { DraggableComponent } from './draggable/draggable.component';


@NgModule({
  declarations: [DraggableComponent],
  imports: [
    CommonModule,
    DraggableRoutingModule
  ]
})
export class DraggableModule { }
