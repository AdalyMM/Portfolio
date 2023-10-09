import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  breakpoints: { [key: string]: boolean } = {
    XSmall: false,
    Small: false,
    Medium: false,
    Large: false,
    XLarge: false,
  };
  openLateralMenu = false;

  constructor(
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit(): void {
    this.sharedDataService.currentBreakpoints.subscribe((values) => {
      this.breakpoints['XSmall'] = values[Breakpoints.XSmall];
      this.breakpoints['Small'] = values[Breakpoints.Small];
      this.breakpoints['Medium'] = values[Breakpoints.Medium];
      this.breakpoints['Large'] = values[Breakpoints.Large];
      this.breakpoints['XLarge'] = values[Breakpoints.XLarge];
    });
  }

  ngAfterViewInit(): void {
    if(this.breakpoints['Medium'] || this.breakpoints['Large'] || this.breakpoints['XLarge']){
      const elemento = document.querySelector('.wrapper');

      gsap.from(elemento, {
        y: -200,
        opacity: 0, 
        duration: 1, 
        ease: 'power2.out',
      });
    }

    if(this.breakpoints['XSmall'] || this.breakpoints['Small']){
      const elemento = document.querySelector('.burger-menu-icon');

      gsap.from(elemento, {
        y: -200,
        opacity: 0, 
        duration: 1, 
        ease: 'power2.out',
      });
    }
  }
}
