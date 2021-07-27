import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlowchartStandaloneService {
  constructor() {}
  accountNumber: string = '';
  getAccountNumber(number) {
    let str = number;
    let s1 = str.substring(0, 2);
    let s2 = str.slice(-4);
    let n = str.length - 6;
    let s3 = '';
    for (let i = 0; i < n; i++) s3 = s3 + '*';
    this.accountNumber = s1 + s3 + s2;
    console.log('string ---> ', this.accountNumber);
  }
}
