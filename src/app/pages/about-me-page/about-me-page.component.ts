import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Breakpoints } from '@angular/cdk/layout';
import { gsap } from 'gsap';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.sass']
})
export class AboutMePageComponent implements OnInit, AfterViewInit {
  breakpoints: { [key: string]: boolean } = {
    XSmall: false,
    Small: false,
    Medium: false,
    Large: false,
    XLarge: false,
  };

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
    console.log(this.breakpoints);
  }

  ngAfterViewInit(): void {
    var tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    //Text box
    const infoContainer = document.querySelector('.info-container');
    const angularInfoContainerImage = document.querySelector('.angular-info-container img');
    const typescriptInfoContainerImage = document.querySelector('.typescript-info-container img');
    const css3InfoContainerImage = document.querySelector('.css3-info-container img');
    const html5InfoContainerImage = document.querySelector('.html5-info-container img');
    const gitInfoContainerImage = document.querySelector('.git-info-container img');
    const angularInfoContainerSpan = document.querySelector('.angular-info-container span');
    const typescriptInfoContainerSpan = document.querySelector('.typescript-info-container span');
    const css3InfoContainerSpan = document.querySelector('.css3-info-container span');
    const html5InfoContainerSpan = document.querySelector('.html5-info-container span');
    const gitInfoContainerSpan = document.querySelector('.git-info-container span');
    const armRobotContainer = document.querySelector('.arm-robot-image-container');

    const allElements = [angularInfoContainerImage,
      typescriptInfoContainerImage,
      css3InfoContainerImage,
      html5InfoContainerImage,
      gitInfoContainerImage,
      angularInfoContainerSpan,
      typescriptInfoContainerSpan,
      css3InfoContainerSpan,
      html5InfoContainerSpan,
      gitInfoContainerSpan]

    //Animation for the text box.
    gsap.to(infoContainer, {
      scale: 1.5,
      yoyo: true,
      repeat: 1,
      duration: 0.2,
      ease: 'power1.inOut',
      onComplete: () => {
        gsap.to(infoContainer, {
          scale: 1.1,
          yoyo: true,
          repeat: 1,
          duration: 0.2,
          ease: 'power1.inOut'
        });
      }
    });
    if (this.breakpoints['XSmall'] || this.breakpoints['Small']) {
      tl.from(armRobotContainer, {
        y: '500px',
        opacity: 1,
        duration: 1
      });
      tl.from(allElements, {
        y: '800px',
        opacity: 0,
        duration: 1
      });
    }
    else {
      //Animation for the elements in Angular container.
      tl.to(angularInfoContainerImage, {
        scale: 1.5,
        opacity: 1,
        duration: 0.25,
        onComplete: () => {
          // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
          gsap.to(angularInfoContainerImage, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
              // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
              gsap.to(angularInfoContainerImage, {
                scale: 1.1,
                opacity: 1,
                duration: 0.25,
                repeat: 1,
                yoyo: true,
                ease: 'power1.inOut'
              });
            },
          });
        },
      });
      tl.to(angularInfoContainerSpan, {
        scale: 1.5,
        opacity: 1,
        duration: 0.25,
        onComplete: () => {
          // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
          gsap.to(angularInfoContainerSpan, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
              // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
              gsap.to(angularInfoContainerSpan, {
                scale: 1.1,
                opacity: 1,
                duration: 0.25,
                repeat: 1,
                yoyo: true,
                ease: 'power1.inOut'
              });
            },
          });
        },
      });
      //Animation for the elements in Typescript container.
      tl.to(typescriptInfoContainerImage, {
        scale: 1.5,
        opacity: 1,
        duration: 0.25,
        onComplete: () => {
          // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
          gsap.to(typescriptInfoContainerImage, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
              // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
              gsap.to(typescriptInfoContainerImage, {
                scale: 1.1,
                opacity: 1,
                duration: 0.25,
                repeat: 1,
                yoyo: true,
                ease: 'power1.inOut'
              });
            },
          });
        },
      });
      tl.to(typescriptInfoContainerSpan, {
        scale: 1.5,
        opacity: 1,
        duration: 0.25,
        onComplete: () => {
          // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
          gsap.to(typescriptInfoContainerSpan, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
              // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
              gsap.to(typescriptInfoContainerSpan, {
                scale: 1.1,
                opacity: 1,
                duration: 0.25,
                repeat: 1,
                yoyo: true,
                ease: 'power1.inOut'
              });
            },
          });
        },
      });
      //Animation for the elements in CSS3 container.
      tl.to(css3InfoContainerImage, {
        scale: 1.5,
        opacity: 1,
        duration: 0.25,
        onComplete: () => {
          // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
          gsap.to(css3InfoContainerImage, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
              // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
              gsap.to(css3InfoContainerImage, {
                scale: 1.1,
                opacity: 1,
                duration: 0.25,
                repeat: 1,
                yoyo: true,
                ease: 'power1.inOut'
              });
            },
          });
        },
      });
      tl.to(css3InfoContainerSpan, {
        scale: 1.5,
        opacity: 1,
        duration: 0.25,
        onComplete: () => {
          // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
          gsap.to(css3InfoContainerSpan, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
              // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
              gsap.to(css3InfoContainerSpan, {
                scale: 1.1,
                opacity: 1,
                duration: 0.25,
                repeat: 1,
                yoyo: true,
                ease: 'power1.inOut'
              });
            },
          });
        },
      });
      //Animation for the elements in HTML5 container.
      tl.to(html5InfoContainerImage, {
        scale: 1.5,
        opacity: 1,
        duration: 0.25,
        onComplete: () => {
          // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
          gsap.to(html5InfoContainerImage, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
              // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
              gsap.to(html5InfoContainerImage, {
                scale: 1.1,
                opacity: 1,
                duration: 0.25,
                repeat: 1,
                yoyo: true,
                ease: 'power1.inOut'
              });
            },
          });
        },
      });
      tl.to(html5InfoContainerSpan, {
        scale: 1.5,
        opacity: 1,
        duration: 0.25,
        onComplete: () => {
          // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
          gsap.to(html5InfoContainerSpan, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
              // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
              gsap.to(html5InfoContainerSpan, {
                scale: 1.1,
                opacity: 1,
                duration: 0.25,
                repeat: 1,
                yoyo: true,
                ease: 'power1.inOut'
              });
            },
          });
        },
      });
      //Animation for the elements in git container.
      tl.to(gitInfoContainerImage, {
        scale: 1.5,
        opacity: 1,
        duration: 0.25,
        onComplete: () => {
          // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
          gsap.to(gitInfoContainerImage, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
              // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
              gsap.to(gitInfoContainerImage, {
                scale: 1.1,
                opacity: 1,
                duration: 0.25,
                repeat: 1,
                yoyo: true,
                ease: 'power1.inOut'
              });
            },
          });
        },
      });
      tl.to(gitInfoContainerSpan, {
        scale: 1.5,
        opacity: 1,
        duration: 0.25,
        onComplete: () => {
          // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
          gsap.to(gitInfoContainerSpan, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
              // Al completar la animación, establecer la escala a 1.1 y la opacidad a 1
              gsap.to(gitInfoContainerSpan, {
                scale: 1.1,
                opacity: 1,
                duration: 0.25,
                repeat: 1,
                yoyo: true,
                ease: 'power1.inOut',
                onComplete: () => {
                  gsap.to(gitInfoContainerSpan, {
                    scale: 1.1,
                    opacity: 1,
                    duration: 0.25,
                    repeat: 1,
                    yoyo: true,
                    ease: 'power1.inOut',
                  });
                  //tl.pause();
                }
              });
            },
          });
        },
      });
      gsap.from(armRobotContainer, {
        y: '500px',
        opacity: 1,
        duration: 1
      });
    }
  }
}
