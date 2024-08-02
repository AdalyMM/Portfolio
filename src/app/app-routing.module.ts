import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'about', component: AboutMePageComponent},
  { path: 'projects', component: ProjectsPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: '**', pathMatch: 'full',  redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
