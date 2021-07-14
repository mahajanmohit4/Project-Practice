import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassingDataRoutingModule } from './passing-data-routing.module';
import { MainComponent } from './main/main.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { SiblingComponent } from './sibling/sibling.component';

@NgModule({
  declarations: [MainComponent, Sibling1Component, Sibling2Component, SiblingComponent],
  imports: [CommonModule, PassingDataRoutingModule],
})
export class PassingDataModule {}
