import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowchartStandaloneRoutingModule } from './flowchart-standalone-routing.module';
import { FlowchartStandaloneComponent } from './flowchart-standalone.component';
import { MaterialModule } from 'src/app/layout/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FlowchartStandaloneComponent],
  imports: [
    CommonModule,
    FlowchartStandaloneRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
  ],
  exports: [FlowchartStandaloneComponent],
})
export class FlowchartStandaloneModule {}
