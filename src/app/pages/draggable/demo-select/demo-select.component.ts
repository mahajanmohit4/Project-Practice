import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-demo-select',
  templateUrl: './demo-select.component.html',
  styleUrls: ['./demo-select.component.scss'],
  providers: [DatePipe],
})
export class DemoSelectComponent implements OnInit {
  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {
    let d = new Date();
    this.selectedDateFn();

    function formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    }
    console.log('New DAte ---> ', formatDate(d));
  }

  selectedDateFn() {
    var date = new Date();

    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDate();

    console.log('get date ', year, ' ', month, ' ', day);
    const dd = year + '-' + month + '-' + day;
    console.log('Get Date 1', dd, ' type of ', typeof dd);

    const d = {
      alttext:
        'The circuit diagram consists a total of seven elements. The elements present in the circuit are, one voltage source which is labeled v subscript 1 (t), three resistors which are labeled 1 ,R subscript 2 and R subscript 3 ,two capacitors which are labeled C subscript 2 and C subscript 1 ,one inductor which is labeled I. One end of the voltage source, v subscript 1 (t) is connected to R subscript 2. The other end of the resistor, R subscript 2 is connected to C subscript 1. The other end of the capacitor, C subscript 1 is connected to R subscript 3. The other end of the resistor, R subscript 3 is connected to C subscript 2. The other end of the capacitor, C subscript 2 is connected to other end of the voltage source, v subscript 1 (t) and 1.',
      latex: 'some latex',
      image_url:
        'media/files/images/tags/20210709091352870218_Engg_circuit_1.png',
      id: 101099,
      json: {
        alttext:
          'The circuit diagram consists a total of seven elements. The elements present in the circuit are, one voltage source which is labeled v subscript 1 (t), three resistors which are labeled 1 ,R subscript 2 and R subscript 3 ,two capacitors which are labeled C subscript 2 and C subscript 1 ,one inductor which is labeled I. One end of the voltage source, v subscript 1 (t) is connected to R subscript 2. The other end of the resistor, R subscript 2 is connected to C subscript 1. The other end of the capacitor, C subscript 1 is connected to R subscript 3. The other end of the resistor, R subscript 3 is connected to C subscript 2. The other end of the capacitor, C subscript 2 is connected to other end of the voltage source, v subscript 1 (t) and 1.',
        alttable: {
          I: {
            I: '0',
            'v subscript 1 (t)': '0',
            '1': '0',
            'R subscript 2': '0',
            'R subscript 3': '0',
            'C subscript 2': '0',
            'C subscript 1': '0',
          },
          'v subscript 1 (t)': {
            I: '0',
            'v subscript 1 (t)': '0',
            '1': '1',
            'R subscript 2': '1',
            'R subscript 3': '0',
            'C subscript 2': '1',
            'C subscript 1': '0',
          },
          '1': {
            I: '0',
            'v subscript 1 (t)': '2',
            '1': '0',
            'R subscript 2': '0',
            'R subscript 3': '0',
            'C subscript 2': '1',
            'C subscript 1': '0',
          },
          'R subscript 2': {
            I: '0',
            'v subscript 1 (t)': '1',
            '1': '0',
            'R subscript 2': '0',
            'R subscript 3': '0',
            'C subscript 2': '0',
            'C subscript 1': '1',
          },
          'R subscript 3': {
            I: '0',
            'v subscript 1 (t)': '0',
            '1': '0',
            'R subscript 2': '0',
            'R subscript 3': '0',
            'C subscript 2': '2',
            'C subscript 1': '2',
          },
          'C subscript 2': {
            I: '0',
            'v subscript 1 (t)': '2',
            '1': '1',
            'R subscript 2': '0',
            'R subscript 3': '2',
            'C subscript 2': '0',
            'C subscript 1': '0',
          },
          'C subscript 1': {
            I: '0',
            'v subscript 1 (t)': '0',
            '1': '0',
            'R subscript 2': '2',
            'R subscript 3': '1',
            'C subscript 2': '0',
            'C subscript 1': '0',
          },
        },
        original_connection_matrix: [
          {
            id: 'Inductor 1',
            label: 'I',
            number_of_sides: 0,
            polarity: 0,
            bounding_box: [868, 263, 941, 600],
            connections: [],
            component_type: 'Inductor',
          },
          {
            id: 'Voltage Source 1',
            label: 'v subscript 1 (t)',
            number_of_sides: 2,
            polarity: 0,
            bounding_box: [161, 548, 304, 682],
            connections: [
              [[346, 168, 577, 250]],
              [
                [1342, 573, 1541, 666],
                [844, 674, 927, 906],
              ],
            ],
            component_type: 'Voltage Source',
          },
          {
            id: 'Resistor 1',
            label: '1',
            number_of_sides: 1,
            polarity: 0,
            bounding_box: [844, 674, 927, 906],
            connections: [
              [
                [161, 548, 304, 682],
                [1342, 573, 1541, 666],
              ],
            ],
            component_type: 'Resistor',
          },
          {
            id: 'Resistor 2',
            label: 'R subscript 2',
            number_of_sides: 2,
            polarity: 0,
            bounding_box: [346, 168, 577, 250],
            connections: [[[161, 548, 304, 682]], [[653, 120, 744, 299]]],
            component_type: 'Resistor',
          },
          {
            id: 'Resistor 3',
            label: 'R subscript 3',
            number_of_sides: 2,
            polarity: 0,
            bounding_box: [1052, 171, 1279, 250],
            connections: [[[653, 120, 744, 299]], [[1342, 573, 1541, 666]]],
            component_type: 'Resistor',
          },
          {
            id: 'Capacitor 1',
            label: 'C subscript 2',
            number_of_sides: 2,
            polarity: 0,
            bounding_box: [1342, 573, 1541, 666],
            connections: [
              [
                [161, 548, 304, 682],
                [844, 674, 927, 906],
              ],
              [[1052, 171, 1279, 250]],
            ],
            component_type: 'Capacitor',
          },
          {
            id: 'Capacitor 2',
            label: 'C subscript 1',
            number_of_sides: 2,
            polarity: 0,
            bounding_box: [653, 120, 744, 299],
            connections: [[[346, 168, 577, 250]], [[1052, 171, 1279, 250]]],
            component_type: 'Capacitor',
          },
        ],
      },
    };
  }
}
