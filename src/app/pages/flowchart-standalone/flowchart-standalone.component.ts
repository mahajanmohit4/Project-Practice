import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flowchart-standalone',
  templateUrl: './flowchart-standalone.component.html',
  styleUrls: ['./flowchart-standalone.component.scss'],
})
export class FlowchartStandaloneComponent implements OnInit {
  constructor() {}
  practiceData;
  dummyData;
  ngOnInit(): void {
    this.Data();
    this.Data1();
  }
  jsonData;
  jsonDate1;
  Data() {
    this.jsonData = [
      {
        id: 'B1R',
        text: 'Nucleic acids store the information that encodes life',
        connections: [
          ['B2R', 'What is a nucleic acid? 4.1'],
          ['B5R', 'Could life have evolved from an RNA? 4.4'],
        ],
      },
      {
        id: 'B2R',
        text: 'What is a nucleic acid? 4.1',
        connections: [
          ['B3R', 'DNA structure and function 4.2'],
          ['B4R', 'RNA structure and function 4.3'],
        ],
      },
      {
        id: 'B3R',
        text: 'DNA structure and function 4.2',
        connections: [['B6R', 'Stability and storage']],
      },
      {
        id: 'B4R',
        text: 'RNA structure and function 4.3',
        connections: [['B7R', 'Versatility and catalysis']],
      },
      {
        id: 'B5R',
        text: 'Could life have evolved from an RNA? 4.4',
        connections: [],
      },
      {
        id: 'B6R',
        text: 'Stability and storage',
        connections: [],
      },
      {
        id: 'B7R',
        text: 'Versatility and catalysis',
        connections: [],
      },
    ];
  }

  getData() {
    console.log('get data ', this.jsonData);
    console.log('get data1 ', this.dummyData);
  }

  deleteNode(i, j) {
    console.log('i : ', i, ' j : ', j);
    this.dummyData[i].connections.splice(j, 1);
    console.log(' row ', this.dummyData[i].connections);
  }
  addNode(i, j) {
    console.log('add node ', i, j);
    let add = {
      id: '',
      shape: '',
      text: '',
    };
    this.dummyData[i].connections.splice(j + 1, 0, add);
  }

  Data1() {
    this.dummyData = [
      {
        id: 'B1D',
        shape: 'Rhombus',
        text: 'score < 60',
        is_connected_to_end: false,
        connections: [
          {
            id: 'B2P',
            shape: 'Parallelogram',
            text: 'Display "Your grade is F."',
            'arrow-label': 'True',
          },
          {
            id: 'B3D',
            shape: 'Rhombus',
            text: 'score < 70',
            'arrow-label': 'False',
          },
        ],
      },
      {
        id: 'B2P',
        shape: 'Parallelogram',
        text: 'Display "Your grade is F."',
        is_connected_to_end: true,
        connections: [],
      },
      {
        id: 'B3D',
        shape: 'Rhombus',
        text: 'score < 70',
        is_connected_to_end: false,
        connections: [
          {
            id: 'B4P',
            shape: 'Parallelogram',
            text: 'Display "Your grade is D."',
            'arrow-label': 'True',
          },
          {
            id: 'B5D',
            shape: 'Rhombus',
            text: 'score < 80',
            'arrow-label': 'False',
          },
        ],
      },
      {
        id: 'B4P',
        shape: 'Parallelogram',
        text: 'Display "Your grade is D."',
        is_connected_to_end: true,
        connections: [],
      },
      {
        id: 'B5D',
        shape: 'Rhombus',
        text: 'score < 80',
        is_connected_to_end: false,
        connections: [
          {
            id: 'B6P',
            shape: 'Parallelogram',
            text: 'Display "Your grade is C."',
            'arrow-label': 'True',
          },
          {
            id: 'B7D',
            shape: 'Rhombus',
            text: 'score <90',
            'arrow-label': 'False',
          },
        ],
      },
      {
        id: 'B6P',
        shape: 'Parallelogram',
        text: 'Display "Your grade is C."',
        is_connected_to_end: true,
        connections: [],
      },
      {
        id: 'B7D',
        shape: 'Rhombus',
        text: 'score <90',
        is_connected_to_end: false,
        connections: [
          {
            id: 'B8P',
            shape: 'Parallelogram',
            text: 'Display "Your grade is A."',
            'arrow-label': 'False',
          },
          {
            id: 'B9P',
            shape: 'Parallelogram',
            text: 'Display "Your grade is B."',
            'arrow-label': 'True',
          },
        ],
      },
      {
        id: 'B8P',
        shape: 'Parallelogram',
        text: 'Display "Your grade is A."',
        is_connected_to_end: true,
        connections: [],
      },
      {
        id: 'B9P',
        shape: 'Parallelogram',
        text: 'Display "Your grade is B."',
        is_connected_to_end: true,
        connections: [],
      },
    ];
  }
}
