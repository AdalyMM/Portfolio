import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Breakpoints } from '@angular/cdk/layout';
import { ImagePreloadService } from 'src/app/services/image-preload.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  breakpoints: { [key: string]: boolean } = {
    XSmall: false,
    Small: false,
    Medium: false,
    Large: false,
    XLarge: false,
  };
  openLateralMenu = false;
  suscriptions: Subscription[] = [];
  private images: string[] = [];
  gsapAnimations: any[] = [];

  constructor(
    private sharedDataService: SharedDataService,
    private imagePreloadService: ImagePreloadService
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
    this.images = [
      '../../../assets/icons/contact.png',
      '../../../assets/icons/download_icon.png',
      '../../../assets/icons/home.png',
      '../../../assets/icons/info.png',
      '../../../assets/icons/project.png',
      '../../../assets/icons/square-menu.png',
    ];
    this.imagePreloadService.preloadImages(this.images).then(() => {
      this.animations();
    });
  }

  ngOnDestroy(): void {
    this.suscriptions.forEach(suscription => {
      suscription.unsubscribe();
    });
    this.gsapAnimations.forEach(animation => animation.kill());
    this.images.forEach((url) => {
      this.imagePreloadService.cancelPreload(url);
    });
  }

  animations(): void {
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

  openCV(): void {
    window.open('../../../assets/cv/CV-ATS.pdf', '_blank');
  }
}
