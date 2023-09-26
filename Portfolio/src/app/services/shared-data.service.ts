import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private breakpointValues: { [key: string]: boolean } = {};

  private breakpointSubject = new BehaviorSubject(this.breakpointValues);
  currentBreakpoints = this.breakpointSubject.asObservable();

  setBreakpointValue(breakpoint: string, value: boolean) {
    this.breakpointValues[breakpoint] = value;
    this.breakpointSubject.next(this.breakpointValues);
  }
}
