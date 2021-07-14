import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private subject = new Subject<any>();

  sendClickEvent() {
    this.subject.next();
  }

  sendChangeEvent(data) {
    this.subject.next(data);
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  getChangeEvent(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() {}
}
