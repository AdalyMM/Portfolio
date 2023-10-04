import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainPageComponent,
    AboutMePageComponent,
    ProjectsPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
