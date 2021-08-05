import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-mat-tab-pr',
  templateUrl: './mat-tab-pr.component.html',
  styleUrls: ['./mat-tab-pr.component.scss'],
})
export class MatTabPrComponent implements OnInit {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }
  constructor() {}

  ngOnInit(): void {}
  First() {
    this.activeLink = 'first';
  }
  Second() {
    this.activeLink = 'second';
  }
  Third() {
    this.activeLink = 'third';
  }
}
