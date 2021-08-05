import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabPrRoutingModule } from './mat-tab-pr-routing.module';
import { MatTabPrComponent } from './mat-tab-pr.component';
import { Component1Component } from './component/component1/component1.component';
import { Component2Component } from './component/component2/component2.component';
import { Component3Component } from './component/component3/component3.component';
import { MaterialModule } from 'src/app/layout/material/material.module';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  declarations: [
    MatTabPrComponent,
    Component1Component,
    Component2Component,
    Component3Component,
  ],
  imports: [CommonModule, MatTabPrRoutingModule, MaterialModule, MatTabsModule],
  exports: [
    MatTabPrComponent,
    Component1Component,
    Component2Component,
    Component3Component,
  ],
})
export class MatTabPrModule {}
