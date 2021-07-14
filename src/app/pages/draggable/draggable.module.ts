import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableRoutingModule } from './draggable-routing.module';
import { DraggableComponent } from './draggable/draggable.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { DraggableResizableComponent } from './draggable-resizable/draggable-resizable.component';
import { MaterialModule } from 'src/app/layout/material/material.module';

import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoSelectComponent } from './demo-select/demo-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [DraggableResizableComponent, DemoSelectComponent],
  imports: [
    CommonModule,
    DraggableRoutingModule,
    AngularDraggableModule,
    MaterialModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  exports: [DemoSelectComponent],
})
export class DraggableModule {}
