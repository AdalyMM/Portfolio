import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Breakpoints } from '@angular/cdk/layout';
import { gsap } from 'gsap';
import { MatDialog } from '@angular/material/dialog';
import { ProjectInfoComponent } from 'src/app/components/project-info/project-info.component';


@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.sass']
})
export class ProjectsPageComponent implements OnInit, AfterViewInit {
  breakpoints: { [key: string]: boolean } = {
    XSmall: false,
    Small: false,
    Medium: false,
    Large: false,
    XLarge: false,
  };
  suscriptions: Subscription[] = [];
  gsapAnimations: any[] = [];
  projectImageSource = "";
  projectTitle = "";
  imagePaths: string[] = [];
  tlProjects: any;
  projectsContainer: any;
  projects = [
    { image: '../../../assets/images/Portfolio.png', info: 'Mi portafolio web' },
    { image: '../../../assets/images/Chatbot.png', info: 'Chatbot' }
    // Agrega más proyectos según sea necesario
  ];
  currentIndex = 0;

  constructor(
    private sharedDataService: SharedDataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.suscriptions.push(this.sharedDataService.currentBreakpoints.subscribe((values) => {
      this.breakpoints['XSmall'] = values[Breakpoints.XSmall];
      this.breakpoints['Small'] = values[Breakpoints.Small];
      this.breakpoints['Medium'] = values[Breakpoints.Medium];
      this.breakpoints['Large'] = values[Breakpoints.Large];
      this.breakpoints['XLarge'] = values[Breakpoints.XLarge];
    }));
    if (window.innerWidth >= 1700 && window.innerWidth < 1920) {
      this.breakpoints['Large'] = false;
      this.breakpoints['XLarge'] = true;
    }
    this.imagePaths = ['assets/images/Portfolio.png', 'assets/images/robot.png'];
  }

  ngAfterViewInit(): void {
    this.animations();
  }

  animations(): void {
    var tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });

    const title = document.querySelector('.title');
    const upperCube = document.querySelector('.upper-cube img');
    const upperShape = document.querySelector('.upper-shape img');
    const projectsContainer = document.querySelector('.projects-container');
    const robot = document.querySelector('.robot img');
    const lowerShape = document.querySelector('.lower-shape img');
    const lowerCube = document.querySelector('.lower-cube img');
    gsap.set(lowerCube, { opacity: 0 });

    // Animation for the background figures.
    if (this.breakpoints['XSmall'] || this.breakpoints['Small']) {
      this.gsapAnimations.push(tl.from(upperShape, { opacity: 0, y: -650, duration: .75, ease: 'power2.out', onStart: () => { this.gsapAnimations.push(gsap.fromTo(lowerShape, { opacity: 0, y: 600 }, { opacity: 1, y: 500, duration: .75, ease: 'power2.out' })) } }));
      this.gsapAnimations.push(tl.from(upperCube, { opacity: 0, y: -250, duration: .75, ease: 'power2.out', onStart: () => { this.gsapAnimations.push(gsap.fromTo(lowerCube, { opacity: 0, y: 350 }, { opacity: 1, y: 0, duration: .75, ease: 'power2.out' })); } }));
      this.gsapAnimations.push(tl.from(title, { opacity: 0, y: -350, duration: .75, ease: 'power2.out', onStart: () => { this.gsapAnimations.push(gsap.fromTo(robot, { opacity: 0, x: 300 }, { opacity: 1, x: 0, duration: .75, ease: 'power2.out' })) } }));
      this.gsapAnimations.push(tl.from(projectsContainer, { opacity: 0, y: 350, duration: .75, ease: 'power2.out' }));
    }
    else {
      this.gsapAnimations.push(tl.from(upperShape, { opacity: 0, y: -650, duration: .75, ease: 'power2.out', onStart: () => { this.gsapAnimations.push(gsap.fromTo(lowerShape, { opacity: 0, y: 600 }, { opacity: 1, y: 300, duration: .75, ease: 'power2.out' })) } }));
      this.gsapAnimations.push(tl.from(upperCube, { opacity: 0, y: -250, duration: .75, ease: 'power2.out', onStart: () => { this.gsapAnimations.push(gsap.fromTo(lowerCube, { opacity: 0, y: 350 }, { opacity: 1, y: 0, duration: .75, ease: 'power2.out' })); } }));
      this.gsapAnimations.push(tl.from(title, { opacity: 0, y: -350, duration: .75, ease: 'power2.out', onStart: () => { this.gsapAnimations.push(gsap.fromTo(robot, { opacity: 0, x: 300 }, { opacity: 1, x: 0, duration: .75, ease: 'power2.out' })) } }));
      this.gsapAnimations.push(tl.from(projectsContainer, { opacity: 0, y: 350, duration: .75, ease: 'power2.out' }));
    }
  }

  prevProject() {
    if (this.currentIndex === 0) {
      // Evitar moverse a la izquierda desde el primer proyecto
      return;
    }
    this.animateProjects(-1);
  }

  nextProject() {
    if (this.currentIndex === this.projects.length - 1) {
      // Evitar moverse a la derecha desde el último proyecto
      return;
    }
    this.animateProjects(1);
  }

  animateProjects(direction: number) {
    const projectsContainer = document.querySelector('.projects');
    const projects = document.querySelectorAll('.project');
    this.currentIndex = (this.currentIndex + direction + this.projects.length) % this.projects.length;
    gsap.to(projectsContainer, {
      xPercent: -100 * this.currentIndex,
      duration: 0.5,
    });
  }

  onMouseEnter(elemento: string): void {
    gsap.to(`.${elemento}`, { scale: 1.3, duration: 0.3 });
  }

  onMouseLeave(elemento: string): void {
    gsap.to(`.${elemento}`, { scale: 1, duration: 0.3 });
  }

  openDialog(projectNumber: number): void{
    if(this.breakpoints['Large'] || this.breakpoints['XLarge']) {
      const dialogRef = this.dialog.open(ProjectInfoComponent, {
        width: '800px',
        data: {
          projectNumber: projectNumber,
        },
      });
    }
    else if (this.breakpoints['Medium']){
      const dialogRef = this.dialog.open(ProjectInfoComponent, {
        width: '500px',
        data: {
          projectNumber: projectNumber,
        },
      });
    }
    else {
      const dialogRef = this.dialog.open(ProjectInfoComponent, {
        width: '300px',
        data: {
          projectNumber: projectNumber,
        },
      });
    }
  }
}
