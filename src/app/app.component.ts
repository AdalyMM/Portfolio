import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { SharedDataService } from './services/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Portfolio';
  private previousBreakpointState: { [key: string]: boolean } = {};
  breakpointObserver: any;

  constructor(
    public responsive: BreakpointObserver,
    private sharedService: SharedDataService
  ) {}

  ngOnInit() {
    const breakpoints = [
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]

    breakpoints.forEach((breakpoint) => {
      this.breakpointObserver = this.responsive.observe(breakpoint).subscribe((state: BreakpointState) => {
        const currentBreakpointState = state.matches;
        if (this.previousBreakpointState[breakpoint] !== currentBreakpointState) {
          this.sharedService.setBreakpointValue(breakpoint, currentBreakpointState);
        }
        this.previousBreakpointState[breakpoint] = currentBreakpointState;
      });
    });
  }

  ngOnDestroy(): void {
    this.breakpointObserver.unsubscribe();
  }
}
