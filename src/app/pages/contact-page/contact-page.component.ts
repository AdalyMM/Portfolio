import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { SendEmailComponent } from 'src/app/components/send-email/send-email.component';
import { gsap } from 'gsap';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.sass']
})
export class ContactPageComponent implements OnInit, AfterViewInit {
  breakpoints: { [key: string]: boolean } = {
    XSmall: false,
    Small: false,
    Medium: false,
    Large: false,
    XLarge: false,
  };
  suscriptions: Subscription[] = [];
  activeInfo = false
  titleInfo: string = '';
  info: string = '';

  constructor(
    private sharedDataService: SharedDataService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.suscriptions.push(this.sharedDataService.currentBreakpoints.subscribe((values) => {
      this.breakpoints['XSmall'] = values[Breakpoints.XSmall];
      this.breakpoints['Small'] = values[Breakpoints.Small];
      this.breakpoints['Medium'] = values[Breakpoints.Medium];
      this.breakpoints['Large'] = values[Breakpoints.Large];
      this.breakpoints['XLarge'] = values[Breakpoints.XLarge];
    }));
  }

  ngAfterViewInit(): void {
    this.animation();
  }

  openTab(tab: string): void {
    if(this.breakpoints['XSmall'] || this.breakpoints['Small']){
      let option = tab;
      switch(option) {
        case 'linkedin':
          window.open('https://www.linkedin.com/in/alexis-adaly-m-961741105', '_blank');
          break;
        case 'mail':
            /*const dialogRef = this.dialog.open(SendEmailComponent, {
              width: '800px',
              height: '420px'
            });*/
            window.open('mailto:aadalymmoncada@gmail.com', '_blank');
            break;
        case 'whatsapp':
          window.open('https://wa.me/+525617216569', '_blank');
          break;
        case 'phone':
          window.open('tel:+525617216569', '_blank');
          break;
      }
    }
    else {
      let option = tab;
      switch(option) {
        case 'linkedin':
          window.open('https://www.linkedin.com/in/alexis-adaly-m-961741105', '_blank');
          break;
        case 'mail':
            /*const dialogRef = this.dialog.open(SendEmailComponent, {
              width: '800px',
              height: '420px'
            });*/
            this.activeInfo = true;
            this.titleInfo = 'Correo: ';
            this.info = 'aadalymmoncada@gmail.com';
            break;
        case 'whatsapp':
          window.open('https://wa.me/+529621468781', '_blank');
          break;
        case 'phone':
          this.activeInfo = true;
          this.titleInfo = 'Teléfono:';
          this.info = '+529186948721';
          break;
      }
    }
  }

  animation(): void {
    var tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
    var heartbit = gsap.timeline({ repeat: -1, yoyo: true });
    heartbit.pause();
    const titleDiv = document.querySelector('.title');
    const titleSpan = document.querySelector('.title span');
    const linkedin = document.querySelector('.linkedin img');
    const mail = document.querySelector('.mail img');
    const whatsapp = document.querySelector('.whatsapp img');
    const phone = document.querySelector('.phone img');
    const allElements = [linkedin, mail, whatsapp, phone];

    /*gsap.from(titleDiv, {
      y: -300,
      duration: 2.5,
      ease: 'power2.out'
    });*/

    gsap.fromTo(titleSpan, 
      { top: '300px', opacity: 0 },
      { top: 0, opacity: 1, duration: 2, ease: 'power2.out' }
    );

    tl.to(linkedin, { opacity: 1, duration: .75});
    tl.to(mail, { opacity: 1, duration: .75});
    tl.to(whatsapp, { opacity: 1, duration: .75});
    tl.to(phone, { opacity: 1, duration: .75, onComplete: () => {
      heartbit.play();
    }});

    heartbit.to(allElements, { scale: 1.2, duration: 0.4 })
             .to(allElements, { scale: 1, duration: 0.4 });
  }
}
