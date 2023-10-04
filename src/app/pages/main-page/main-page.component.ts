import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Breakpoints } from '@angular/cdk/layout';
import { gsap } from 'gsap';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit, AfterViewInit {
  breakpoints: { [key: string]: boolean } = {
    XSmall: false,
    Small: false,
    Medium: false,
    Large: false,
    XLarge: false,
  };

  constructor(
    private sharedDataService: SharedDataService,
    private elementRef: ElementRef) {}

  ngOnInit() {
    this.sharedDataService.currentBreakpoints.subscribe((values) => {
      this.breakpoints['XSmall'] = values[Breakpoints.XSmall];
      this.breakpoints['Small'] = values[Breakpoints.Small];
      this.breakpoints['Medium'] = values[Breakpoints.Medium];
      this.breakpoints['Large'] = values[Breakpoints.Large];
      this.breakpoints['XLarge'] = values[Breakpoints.XLarge];
    });
  }

  ngAfterViewInit() {
    // Select the elements to rotate.
    const boxUpperHexagon = document.querySelector('.box-upper-hexagon');
    const boxLittleHexagon1 = document.querySelector('.box-little-hexagon-1');
    const boxLittleHexagon2 = document.querySelector('.box-little-hexagon-2');
    const boxLittleHexagon3 = document.querySelector('.box-little-hexagon-3');
    const boxLittleHexagon4 = document.querySelector('.box-little-hexagon-4');
    const boxLowerHexagon = document.querySelector('.box-lower-hexagon');

    // Animation for rotate hexagons.
    gsap.to([boxUpperHexagon, boxLittleHexagon1, boxLittleHexagon2, boxLittleHexagon3, boxLittleHexagon4,boxLowerHexagon], {
      rotation: 360, // Rotate 360 degrees.
      duration: 10,   // Animation duration in seconds.
      repeat: -1,    // Infinite loop.
      ease: 'linear', // Ease function for constant rotation.
    });
    this.mainTitleAnimation();
  }

  // Animation for the main title.
  mainTitleAnimation(): void {
    const h1 = this.elementRef.nativeElement.querySelector('h1');
    const letras = h1.textContent.split('');
    let h1AnimationEnd = false;

    h1.textContent = '';

    letras.forEach((letra: string | null, index: number) => {
      const span = document.createElement('span');
      span.textContent = letra;
      span.style.opacity = '0';
      h1.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        duration: 0.1,
        ease: 'power2.inOut',
        delay: index * 0.1,
        onComplete: (() => {
          if(index === 14){
            this.mainSubtitleAnimation();
          }
        })
      });
    });
  }

  // Animation for the main subtitle
  mainSubtitleAnimation(): void {
    const h2 = this.elementRef.nativeElement.querySelector('h2');
    const letras = h2.textContent.split('');
    h2.style.opacity = '1'

    h2.textContent = '';

    letras.forEach((letra: string | null, index: number) => {
      const span = document.createElement('span');
      span.textContent = letra;
      span.style.opacity = '0';
      h2.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        duration: 0.05,
        ease: 'power2.inOut',
        delay: index * 0.1,
      });
    });
  }
}
