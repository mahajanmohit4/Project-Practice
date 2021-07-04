import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draggable-resizable',
  templateUrl: './draggable-resizable.component.html',
  styleUrls: ['./draggable-resizable.component.scss'],
})
export class DraggableResizableComponent implements OnInit {
  constructor() {}
  data;
  searchResults;
  ngOnInit(): void {
    this.ResponseData();
  }
  ResponseData() {
    this.data = {
      searched: 'Math',
      result: [
        {
          id: 80293,
          img: 'http://54.242.253.8/media/files/images/tags/20200615113619008354_1ocr.png',
          desc: 'This is test output',
          short_desc: 'This is short desc',
        },
        {
          id: 80292,
          img: 'http://54.242.253.8/media/files/images/tags/20200615101940143130_Arrow_53.png',
          desc: 'This is test output',
          short_desc: 'This is short desc',
        },
        {
          id: 80291,
          img: 'http://54.242.253.8/media/files/images/tags/20200615093403774995_Arrow_53.png',
          desc: 'This is test output',
          short_desc: 'This is short desc',
        },
        {
          id: 80293,
          img: 'http://54.242.253.8/media/files/images/tags/20200615093333009311_Image013.png',
          desc: 'This is test output',
          short_desc: 'This is short desc',
        },
        {
          id: 80293,
          img: 'http://54.242.253.8/media/files/images/tags/20200615092244665191_lewisaliphatic_testset_2.png',
          desc: 'This is test output',
          short_desc: 'This is short desc',
        },
        {
          id: 80293,
          img: 'http://54.242.253.8/media/files/images/tags/20200615092213529810_Arrow_53.png',
          desc: 'This is test output',
          short_desc: 'This is short desc',
        },
        {
          id: 80293,
          img: 'http://54.242.253.8/media/files/images/tags/20200615091129003336_Arrow_53.png',
          desc: 'This is test output',
          short_desc: 'This is short desc',
        },
      ],
      total_count: 12,
    };
    this.searchResults = this.data.result;
  }
}
