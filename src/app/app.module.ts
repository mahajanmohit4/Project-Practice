import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Draggable } from 'ng-drag-drop';
import { DraggableComponent } from './pages/draggable/draggable/draggable.component';
import { DraggableResizableComponent } from './pages/draggable-resizable/draggable-resizable.component';

@NgModule({
  declarations: [AppComponent, DraggableComponent, DraggableResizableComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
