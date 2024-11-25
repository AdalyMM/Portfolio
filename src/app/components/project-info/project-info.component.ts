import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface Project {
  projectTitle: string;
  projectDescription: string;
}

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.sass']
})
export class ProjectInfoComponent implements OnInit {
  projects: Project[] = [];
  index: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ProjectInfoComponent>) { 
    this.index = data.projectNumber;
    this.addProject('Mi portafolio web', 'Este proyecto está elaborado desde cero utilizando el framework Angular ' +
    'y la librería de animación GSAP y planeo mejorarlo continuamente para ofrecer la mejorar experiencia de usuario ' +
    'para todas las personas que lo visiten.');
    this.addProject('Chatbot', 'Este chatbot planteaba ser una herramienta de ayuda para adolescentes de entre 12 y 19 años ' +
    'en los temas de salud y educación sexual, lo presentamos en nuestra escuela para ser evaluados en las últimas materias del ' +
    'semestre. Está elaborado utilizando HTML, CSS y Javascript, así como NodeJS para un poco de procesamiento de datos y en ' +
    'su momento utilizamos una base de datos en MySQL.');
  }

  ngOnInit(): void {
    this.projects
  }

  addProject(title: string, description: string): void {
    const newProject: Project = { projectTitle: title, projectDescription: description };
    this.projects.push(newProject);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
