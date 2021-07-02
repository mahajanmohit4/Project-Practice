import { Component, HostListener, OnInit } from '@angular/core';

declare const require: any;
@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.scss'],
})
export class DraggableComponent implements OnInit {
  @HostListener('document:mousedown', ['$event'])
  demo_html = require('!!html-loader!./draggable.component.html');
  demo_ts = require('!!raw-loader!./draggable.component.ts');
  demo_scss = require('!!raw-loader!./draggable.component.scss');

  constructor() {}

  ngOnInit(): void {}
}
