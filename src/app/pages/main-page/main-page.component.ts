import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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
    private elementRef: ElementRef) { }

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
    // Background figures.
    const cornerUpperForm = document.querySelector('.corner-upper-form img');
    const cornerUpperContour = document.querySelector('.corner-upper-contour img');
    const upperBigBubble = document.querySelector('.upper-big-bubble img');
    const upperLittleBubble = document.querySelector('.upper-little-bubble img');
    const centerForm = document.querySelector('.center-form img');
    const lowerBigBubble = document.querySelector('.lower-big-bubble img');
    const lowerLittleBubble = document.querySelector('.lower-little-bubble img');
    const cornerLowerContour = document.querySelector('.corner-lower-contour img');
    const cornerLowerForm = document.querySelector('.corner-lower-form img');

    // Text.
    //const mainTitle = document.querySelector('.main-title span');
    const mainSubtitle = document.querySelector('.main-subtitle span');
    const backgroundSubtitle = document.querySelector('.main-subtitle');


    // Animation for the background figures.
    gsap.from(cornerUpperForm, { opacity: 0, y: -350, duration: 1, ease: 'power2.out' });
    gsap.from(cornerUpperContour, { opacity: 0, y: 250, duration: 1, ease: 'power2.out' });
    gsap.from(upperBigBubble, { opacity: 0, y: -350, duration: 1, ease: 'power2.out' });
    gsap.from(upperLittleBubble, { opacity: 0, y: -350, duration: 1, ease: 'power2.out' });
    gsap.from(centerForm, { opacity: 0, y: -350, duration: 1, ease: 'power2.out' });
    gsap.from(lowerBigBubble, { opacity: 0, y: 350, duration: 1, ease: 'power2.out' });
    gsap.from(lowerLittleBubble, { opacity: 0, y: 350, duration: 1, ease: 'power2.out' });
    gsap.from(cornerLowerContour, { opacity: 0, y: -350, duration: 1, ease: 'power2.out' });
    gsap.from(cornerLowerForm, { opacity: 0, y: 350, duration: 1, ease: 'power2.out' });

    // Animation for the main title.
    this.mainTitleAnimation();
    // Animation for the text and the background subtitle.
    gsap.set(backgroundSubtitle, { y: '350px' });
    gsap.to(backgroundSubtitle, { y: 0, duration: 1, ease: 'power2.out' });
    gsap.from(mainSubtitle, { opacity: 0, y: '-450px', duration: 1, ease: 'power2.out' });
  }

  // Animation for the main title.
  mainTitleAnimation(): void {
    const mainTitleSpan1 = this.elementRef.nativeElement.querySelector('.span-1');
    const mainTitleSpan2 = this.elementRef.nativeElement.querySelector('.span-2');
    const mainTitleSpan3 = this.elementRef.nativeElement.querySelector('.span-3');
    const mainTitleContainer = this.elementRef.nativeElement.querySelector('.main-title');

    gsap.fromTo(mainTitleSpan1, {
      opacity: 0,
      top: '100px',
    }, {
      opacity: 1,
      top: 0,
      duration: 0.3,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.fromTo(mainTitleSpan2, {
          opacity: 0,
          top: '100px',
        }, {
          opacity: 1,
          top: 0,
          duration: 0.3,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.fromTo(mainTitleSpan3, {
              opacity: 0,
              top: '100px',
            }, {
              opacity: 1,
              top: 0,
              duration: 0.3,
              ease: 'power2.inOut',
            });
          },
        });
      },
    });
    
  }
}
