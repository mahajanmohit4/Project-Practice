import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.scss'],
})
export class Sibling2Component implements OnInit {
  clickEventSubscription: Subscription;
  changeEventSubscription: Subscription;

  constructor(private sharedService: SharedService) {
    this.clickEventSubscription = this.sharedService
      .getClickEvent()
      .subscribe(() => {
        this.incrementCount();
      });

    this.changeEventSubscription = this.sharedService
      .getChangeEvent()
      .subscribe((res) => {
        console.log('Change : ', res);
      });
  }

  ngOnInit() {}

  count: number = 0;
  incrementCount() {
    this.count++;
  }
}
